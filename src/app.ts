import express, { Express, Request, Response} from 'express';
const app : Express= express();
const port : number = 3000;
const userController = require('./Controllers/userController');
import db from './db';
// import {createMockData} from './mock'

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.use('/user', userController);

app.listen(port, async () => {
  db.sync({force: true});
  // createMockData();
  console.log(`Express is listening at http://localhost:${port}`);
});