import { Sequelize } from 'sequelize';
// const oracledb = require('oracledb');
const dotenv = require('dotenv');

dotenv.config();

const db : Sequelize = new Sequelize({
    dialect: 'oracle',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialectOptions: {connectString: process.env.DB_CONNECTION_STRING}
});


// sequelize.sync().then(() => 
//     console.info("db connection established"))
//     .catch((err) =>
//     console.error("db connection failed " + err.message));

export default db;