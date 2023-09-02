import Sequelize from './index.js';
import { DataTypes } from 'sequelize';

const User = Sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resume:{
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'data',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

export default User;