
import { Sequelize } from "sequelize";

const { DataTypes } = require('sequelize');
const db : Sequelize = require('../db');
const User = require('./User');


const StandUseRequest = db.define('StandUseRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  requestStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

User.hasMany(StandUseRequest, { foreignKey: 'clientId', as: 'client' });
User.hasMany(StandUseRequest, { foreignKey: 'providerId', as: 'provider' });
Stand.hasMany(StandUseRequest, { foreignKey: 'standId', as: 'stand' });

module.exports = StandUseRequest;