import {
  Model,
  DataTypes
} from 'sequelize';

import sequelize from '../db/sequelize';

class Menu extends Model {
  public id: number;
  public name: string;
  public data: string;
}

Menu.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  data: {
    type: new DataTypes.TEXT('long'),
    allowNull: false
  }
}, {
  tableName: 'menus',
  sequelize
});

export default Menu;
