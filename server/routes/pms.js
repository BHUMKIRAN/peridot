import { createPMS, simulateLoss, getAllPMS } from "../controller/pms.js";

import {Router} from 'express'

const router = Router();

router.get('/pms' , getAllPMS)
router.post('/pms', createPMS)
router.post('/simulateLoss', simulateLoss)

export default router;