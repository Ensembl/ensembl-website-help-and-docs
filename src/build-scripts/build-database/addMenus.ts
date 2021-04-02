import pick from 'lodash/pick';

import { Menu } from '../../models';

import { ParsedMenuItem } from './build-menus/buildMenus';

type Menus = {
  name: string;
  data: ParsedMenuItem[]
}[]

const addMenus = async (menus: Menus) => {
  for (const menu of menus) {
    const newMenu = Menu.create({
      name: menu.name,
      data: prepareMenuItemsData(menu.data)
    });
    await Menu.save(newMenu);
  }
};

// only keep the properties relevant for a stored menu
// (e.g. remove file paths)
const prepareMenuItemsData = (menuItems: ParsedMenuItem[]) => {
  return menuItems.map(item => {
    let children: { items?: ParsedMenuItem[] } = item.items ? {
      items: prepareMenuItemsData(item.items)
    } : {};
    return {
      ...pick(item, ['name', 'type', 'url']),
      ...children
    };
  });
}

export default addMenus;
