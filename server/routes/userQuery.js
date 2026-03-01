import {createQuery , getallQuery} from '../controller/userQuery.js'

import {Router} from 'express'

const router = Router();

router.post('/query', createQuery)
router.get('/query' , getallQuery)

export default router   