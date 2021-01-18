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
    expect(siblingPageMenuItem.url).toBe('/root/sibling'); // pathname from toc plus 
  });

  it('creates web-friendly slugs from file names', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const menuItem = menu.find(item => item.name === 'Page from oddly named file');

    expect(menuItem.path).toBe(path.join(rootTOCDirectoryPath, 'fileWith_strange-name.md'));
    expect(menuItem.url).toBe('/root/file-with-strange-name');
  });

  it('correctly builds data about files in nested directories', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const menuItemWithChildren = menu.find(item => item.name === 'Parent menu item without own page');
    const childrenItems = menuItemWithChildren.items;
    
    expect(childrenItems.length).toBeTruthy();

    const childFoo = childrenItems.find(item => item.name === 'Child Foo');
    const childBar = childrenItems.find(item => item.name === 'Child Bar');

    expect(childFoo.path).toBe(path.join(rootTOCDirectoryPath, 'child-folder-1', 'foo.md'));
    expect(childFoo.url).toBe('/root/child-folder-1/foo');
    expect(childBar.path).toBe(path.join(rootTOCDirectoryPath, 'child-folder-1', 'bar.md'));
    expect(childBar.url).toBe('/root/child-folder-1/bar');
  });

  it.skip('assigns a page to a parent menu item if topicHref is provided', () => {

  });

  it.skip('assigns custom url to a child toc if provided', () => {

  });

  it.skip('uses absolute urls for menu items if provided', () => {

  });

  it('supports references to files in parent or sibling directories', async () => {
    const menu = await createMenu({ tocPath: pathToToc, url: '/root' });
    const menuItemWithChildren = menu.find(item => item.name === 'Parent menu item with its own page');
    const childrenItems = menuItemWithChildren.items;

    // Notice that the file for this page is in a different folder than the TOC file
    const childFoo = childrenItems.find(item => item.name === 'Child Foo');

    expect(childFoo.path).toBe(path.join(rootTOCDirectoryPath, 'child-folder-1', 'foo.md'));
    expect(childFoo.url).toBe('/root/child-folder-1/foo');
  });

});
