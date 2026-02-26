import { createPMS, simulateLoss, getAllPMS, getChartData } from "../controller/pms.js";

import {Router} from 'express'

const router = Router();

router.get('/pms' , getAllPMS)
router.post('/pms', createPMS)
router.post('/simulateLoss', simulateLoss)
router.get('/getChartdata', getChartData)

export default router;