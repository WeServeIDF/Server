import { AxiosInstance } from "axios";
const dotenv = require('dotenv');

dotenv.config();
const DBStr : string = process.env.DB_SERVER_URL;

import axios from 'axios';
export const DBserver : AxiosInstance = axios.create({
    baseURL: DBStr,
	timeout: 8000,
});