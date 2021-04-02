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
  url: string; // can be set explicitly or derived from path
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
  href?: string; // path to file or a url
  url?: string; // url to use if different from the file path
  items?: TOCItem[];
};

type CreateMenuParams = {
  tocPath: string; // path to top-level toc.yml file
  url: string; // pathname of the menu's namespace, e.g. "/about", etc.
};


export type ParsedMenuItem = {
  name: string;
  type: TOCItemType;
  path?: string;
  url?: string;
  items?: ParsedMenuItem[];
};

export const createMenu = async (params: CreateMenuParams) => {
  const { tocPath, url } = params;
  const toc = await readTOC({ filePath: tocPath, url, urlNamespace: url }); // FIXME: error handling?
  const parsedToc = parseTOC(toc);
  return parsedToc;
};

type ReadTOCParams = {
  filePath: string,
  urlNamespace: string,
  url?: string
};
// from the root toc.yml file, generate a tree of TOC items
const readTOC = async (params: ReadTOCParams): Promise<TOC> => {
  const { filePath, url, urlNamespace } = params;
  const fileContent = await fsPromises.readFile(filePath, 'utf-8');
  const directoryPath = path.dirname(filePath);
  const toc = yaml.parse(fileContent) as TOC | TOCItem[];
  if (Array.isArray(toc)) {
    return {
      fullPath: filePath,
      directoryPath,
      url,
      urlNamespace,
      items: toc
    }
  } else {
    return {
      ...toc,
      fullPath: filePath,
      directoryPath,
      urlNamespace
    };
  }
};

const parseTOC = async (toc: TOC): Promise<ParsedMenuItem[]> /* parsedMenuTree - Node or Nodes */ => {
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
    menuItem.url = tocItem.href;
  } else if (tocItemPath && await isTOCFile(path.join(toc.directoryPath, tocItemPath))) {
    // TODO: does this menu parent have a page associated with it?
    const newTocUrl = buildDirectoryUrlFromFileSystem(tocItemPath, toc.url);
    const newToc = await readTOC({
      filePath: path.join(toc.directoryPath, tocItemPath),
      url: newTocUrl,
      urlNamespace: toc.urlNamespace
    });
    const parsedNewToc = await parseTOC(newToc);
    menuItem.items = parsedNewToc;
  } else if (tocItemPath && await isContentFile(path.join(toc.directoryPath, tocItemPath))) {
    menuItem.path = buildFullPathToFile(tocItemPath, toc);
    menuItem.url = tocItem.url || buildPageUrl(tocItem.name, getMenuItemType(menuItem), toc.urlNamespace);
  }

  menuItem.type = getMenuItemType(menuItem);
  return menuItem;
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

const buildDirectoryUrlFromFileSystem = (pathToNewToc: string, urlOfParentToc: string) => {
  const newTocDirectory = path.dirname(pathToNewToc);
  return path.join(urlOfParentToc, newTocDirectory);
};
