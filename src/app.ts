import express, { Express, Request, Response} from 'express';
const app : Express= express();
const port : number = 3000;
var cors = require('cors');
const userController = require('./Controllers/userController');
const stationController = require('./Controllers/stationController');

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.use(cors());

app.use('/user', userController);
app.use('/station', stationController);

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});