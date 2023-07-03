import express, { Express, Request, Response} from 'express';
const app : Express= express();
const port : number = 3000;
const userController = require('./Controllers/userController');
import sequelize from './DB';

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!');
});

app.use('/user', userController);

app.listen(port, async () => {
  await sequelize.sync().then(() => 
  console.info("db connection established"))
  .catch((err) =>
  console.error("db connection failed " + err.message));
  
  console.log(`Express is listening at http://localhost:${port}`);
});