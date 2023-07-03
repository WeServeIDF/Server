const { DataTypes } = require('sequelize');
const db = require('../db');
const User = require('./User');
const StandUseRequest = require('./Request');

const Stand = db.define('Stand', {
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

User.belongsTo(Stand, { foreignKey: 'ownerId', as: 'owner' });
Stand.hasMany(StandUseRequest, { foreignKey: 'standId', as: 'standUseRequests' });

module.exports = Stand;