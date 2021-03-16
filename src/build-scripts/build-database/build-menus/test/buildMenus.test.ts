import path from 'path';

import { createMenu } from '../buildMenus';

describe('createMenu', () => {
  /*
    The tests below will create a menu from the files in the './fixtures' folder

    TODO:
      - decide on the flexibility of names for the toc.yml files:
        - only toc or both toc and TOC?
        - only yml, or both yml and yaml?
  */

  const rootTOCDirectoryPath = path.resolve(__dirname, 'fixture');
  const pathToToc = path.join(rootTOCDirectoryPath, 'toc.yml');

  it('correctly builds data about files in the same directory as toc.yml', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const homePageMenuItem = menu.find(item => item.name === 'Home page');
    const siblingPageMenuItem = menu.find(item => item.name === 'Top-level sibling page');

    expect(homePageMenuItem.path).toBe(path.join(rootTOCDirectoryPath, 'index.md'));
    expect(homePageMenuItem.url).toBe('/'); // explicitly defined in toc.yml
    expect(siblingPageMenuItem.path).toBe(path.join(rootTOCDirectoryPath, 'sibling.md'));
    expect(siblingPageMenuItem.url).toBe('/root/articles/top-level-sibling-page'); // pathname from toc item name and type plus 
  });

  it('assigns the type of article to a menu item by default', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const defaultArticleItem = menu.find(({ name }) => name === 'Top-level sibling page'); // it doesn't have explicit article type in the TOC
    expect(defaultArticleItem.type).toBe('article');
  });

  it('respects the type of a item menu indicated in the TOC', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const explicitlyArticleItem = menu.find(({ name }) => name === 'Explicitly an article page'); // type set to "article" in TOC
    const videoItem = menu.find(({ name }) => name === 'A video page'); // type set to "video" in TOC
    expect(explicitlyArticleItem.type).toBe('article');
    expect(videoItem.type).toBe('video');
  });

  it.skip('assigns a page to a parent menu item if topicHref is provided', () => {

  });

  it.skip('assigns custom url to a child toc if provided', () => {

  });

  it('uses absolute urls for menu items if provided', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const pageWithAbsoluteUrl = menu.find(({ name }) => 
      name === 'Page from an external resource');
    expect(pageWithAbsoluteUrl.url).toBe('https://example.com'); // as defined in the TOC file
  });

});
