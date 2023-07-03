import { Sequelize } from "sequelize";

const { DataTypes } = require('sequelize');
const db : Sequelize = require('../db');

const User = db.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasOne(Stand, { foreignKey: 'ownerId', as: 'primaryStand', scope: { isPrimary: true }});

module.exports = User;