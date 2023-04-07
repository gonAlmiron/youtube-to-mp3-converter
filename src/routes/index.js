import {Router} from 'express';
import ConverterRouter from './converter.router'

const router = Router();

router.use('/converter', ConverterRouter)


export default router;