import express from 'express'
const router = express.Router();
import {Main , Add} from '../Controllers/Main.js'
router.get('/' , Main)
router.get('/api/v1/add' ,Add )


export default router