import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import pick from 'lodash/pick';

import { buildPageUrl } from '../buildPageUrl';

const fsPromises = fs.promises;

type TOC = TOCMetadata & { items: TOCItem[] };

type TOCMetadata = {
  fullPath: string;
  directoryPath: string;
  // url: string; // can be set explicitly or derived from path
  urlNamespace: string;
};

// a TOC item can be either a text article, a video,
// or a parent item without an associated page (we might also consider index pages in the future)
type TOCItemType = 
  | 'article'
  | 'video'
  | 'collection';

type TOCItem = {
  name: string;
  type?: TOCItemType;
  href?: string; // url or path to a file, which can be either a content file (e.g. markdown) or a table-of-contents.yml
  topicHref?: string; // url or path to a content file
  url?: string; // url to use if different from the file path
  items?: TOCItem[];
};

type CreateMenuParams = {
  tocPath: string; // path to top-level toc.yml file
  urlNamespace: string; // the menu's namespace in the url path, e.g. "/about", etc.
};


export type ParsedMenuItem = {
  name: string;
  type: TOCItemType;
  path?: string;
  url?: string;
  items?: ParsedMenuItem[];
};

export const createMenu = async (params: CreateMenuParams) => {
  const { tocPath, urlNamespace } = params;
  const toc = await readTOC({ filePath: tocPath, urlNamespace }); // FIXME: error handling?
  const parsedToc = parseTOC(toc);
  return parsedToc;
};

type ReadTOCParams = {
  filePath: string,
  urlNamespace: string,
  // url?: string
};
// from the root toc.yml file, generate a tree of TOC items
const readTOC = async (params: ReadTOCParams): Promise<TOC> => {
  const { filePath, urlNamespace } = params;
  const fileContent = await fsPromises.readFile(filePath, 'utf-8');
  const directoryPath = path.dirname(filePath);
  const toc = yaml.parse(fileContent) as TOC | TOCItem[];
  if (Array.isArray(toc)) {
    return {
      fullPath: filePath,
      directoryPath,
      // url,
      urlNamespace,
      items: toc
    }
  } else {
    // QUESTION: why does this branch exist?
    return {
      ...toc,
      fullPath: filePath,
      directoryPath,
      urlNamespace
    };
  }
};

const parseTOC = async (toc: TOC): Promise<ParsedMenuItem[]> => {
  const parsedMenuItems = [] as ParsedMenuItem[];

  for (const tocItem of toc.items) {
    const parsedMenuItem = await parseTOCItem(tocItem, toc);
    parsedMenuItems.push(parsedMenuItem);
  }

  return parsedMenuItems;
};

const parseTOCItem = async (tocItem: TOCItem, toc: TOC): Promise<ParsedMenuItem> => {
  const menuItem = pick(tocItem, ['name', 'type', 'url']) as ParsedMenuItem;
  const tocItemPath = tocItem.href;

  if (tocItemPath && /https?:\/\//.test(tocItemPath)) {
    // This TOC item is a link to an external resource
    menuItem.url = tocItem.href;
  } else if (tocItemPath && await isTOCFile(path.join(toc.directoryPath, tocItemPath))) {
    // This TOC item has a list of children items associated with it
    menuItem.items = await parseChildTOC(tocItemPath, toc);

    // It may also have an associated content file
    const ownPagePath = tocItem.topicHref;
    if (ownPagePath && /https?:\/\//.test(ownPagePath)) {
      menuItem.url = ownPagePath;
    } else if (ownPagePath && await isContentFile(path.join(toc.directoryPath, ownPagePath))) {
      menuItem.path = buildFullPathToFile(ownPagePath, toc);
      menuItem.url = tocItem.url || buildPageUrl(tocItem.name, 'article', toc.urlNamespace);
    }
  } else if (tocItemPath && await isContentFile(path.join(toc.directoryPath, tocItemPath))) {
    menuItem.path = buildFullPathToFile(tocItemPath, toc);
    menuItem.url = tocItem.url || buildPageUrl(tocItem.name, getMenuItemType(menuItem), toc.urlNamespace);
  } else if (tocItemPath) {
    // The href field of the TOC item does not refer either to a url or to a valid file on the disk
    // Time to panic.
    const errorMessage = `Invalid path in a table of contents: ${tocItemPath}`;
    throw new Error(errorMessage);
  }

  menuItem.type = getMenuItemType(menuItem);
  return menuItem;
};

const parseChildTOC = async (tocFilePath: string, toc: TOC) => {
  // const newTocUrl = buildDirectoryUrlFromFileSystem(tocFilePath, toc.url);
  const newToc = await readTOC({
    filePath: path.join(toc.directoryPath, tocFilePath),
    // url: newTocUrl,
    urlNamespace: toc.urlNamespace
  });
  return await parseTOC(newToc);
};

const getMenuItemType = (menuItem: ParsedMenuItem): TOCItemType => {
  if (menuItem.type) {
    return menuItem.type;
  } else if (menuItem.items) {
    return 'collection';
  } else {
    return 'article';
  }
};

const isTOCFile = async (filePath: string) => {
  try {
    // check that the file actually exists
    await fsPromises.access(filePath, fs.constants.F_OK);
    const fileName = path.basename(filePath);
    return fileName.toLocaleLowerCase() === 'toc.yml';
  } catch {
    return false;
  }
};

const isContentFile = async (filePath: string) => {
  const contentFileExtensions = ['.md', '.yml'];
  try {
    // check that the file actually exists
    await fsPromises.access(filePath, fs.constants.F_OK);
    const fileExtension = path.extname(filePath);
    return contentFileExtensions.includes(fileExtension);
  } catch {
    return false;
  }
};

const buildFullPathToFile = (filePath: string, toc: TOC) => {
  return path.join(toc.directoryPath, filePath);
};

// FIXME: delete?
const buildDirectoryUrlFromFileSystem = (pathToNewToc: string, urlOfParentToc: string) => {
  const newTocDirectory = path.dirname(pathToNewToc);
  return path.join(urlOfParentToc, newTocDirectory);
};
