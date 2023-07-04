import express, { Router } from 'express';
const router : Router = express.Router();
import { getStations } from "../Services/stationService";

router.get('/test', getStations);

module.exports = router;