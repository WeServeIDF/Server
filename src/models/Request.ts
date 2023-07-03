
import { Sequelize } from "sequelize";

const { DataTypes } = require('sequelize');
const db : Sequelize = require('../db');
const User = require('./User');


const stationUseRequest = db.define('stationUseRequest', {
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

User.hasMany(stationUseRequest, { foreignKey: 'clientId', as: 'client' });
User.hasMany(stationUseRequest, { foreignKey: 'providerId', as: 'provider' });
Station.hasMany(stationUseRequest, { foreignKey: 'stationId', as: 'station' });

module.exports = stationUseRequest;