import express, { Express, Request, Response} from 'express';
const app : Express= express();
const port : number = 3000;
const userController = require('./Controllers/userController');
import db from './DB';
const User = require('./models/User');
const Station = require('./models/Station');
const stationUseRequest = require('./models/stationUseRequest');
// import {createMockData} from './mock'

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.use('/user', userController);

app.listen(port, async () => {
  // User.sync({force: true});
  // Station.sync({force: true});
  // stationUseRequest.sync({force: true});
  db.sync({force: true}).then((result) => {
    console.info("db synced")
    db.getQueryInterface().showAllTables().then((tableObj) => {
      console.log('// Tables in database','==========================');
      console.log(tableObj);
  })
  .catch((err) => {
      console.log('showAllSchemas ERROR',err);
  })
  }).catch((error) => {
      console.error("db sync error", error);
    });
  
  // createMockData();
  console.log(`Express is listening at http://localhost:${port}`);
});