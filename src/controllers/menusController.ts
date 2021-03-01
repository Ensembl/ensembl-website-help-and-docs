import { Request, Response } from 'express';

import { Menu } from '../models';

export const getMenu = async (req: Request, res: Response) => {
  const name = req.query.name as string | undefined;

  if (!name) {
    res.status(400);
    return res.json({
      error: 'Name query parameter cannot be empty'
    });
  }

  try {
    const menu: Menu | null = await Menu.findOne({ where: { name } });

    if (menu) {
      res.json({
        name: menu.name,
        data: menu.data,
      });
    } else {
      res.status(404);
      res.json({
        error: `Menu not found`
      });
    }
  } catch (error) {
    res.status(500);
    console.log('error', error);
    res.json({
      error: 'There was an error processing your request'
    });
  }

};
