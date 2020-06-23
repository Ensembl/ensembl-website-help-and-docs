import { Model, DataTypes } from 'sequelize';

import sequelize from '../db/sequelize';

export class Video extends Model {
  public id: number;
  public file_path: string;
  public title: string;
  public description: string;
  public url: string;
  public data: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Video.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  file_path: {
    type: new DataTypes.STRING(255),
    allowNull: false,
  },
  title: {
    type: new DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: new DataTypes.TEXT('medium'),
    allowNull: true
  },
  data: {
    type: new DataTypes.TEXT('long'),
    allowNull: true
  }
}, {
  tableName: 'videos',
  sequelize
});

sequelize.sync();

export default Video;
