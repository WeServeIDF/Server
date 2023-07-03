const { DataTypes } = require('sequelize');
const db = require('../db');
const User = require('./User');
const stationUseRequest = require('./Request');

const Station = db.define('Station', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  base: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  building: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  network: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  office: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  long: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

User.belongsTo(Station, { foreignKey: 'ownerId', as: 'owner' });
Station.hasMany(stationUseRequest, { foreignKey: 'stationId', as: 'stationUseRequests' });

module.exports = Station;