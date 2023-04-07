import {Router} from 'express'
import { converterController } from '../controllers/converter.controller'

const router = Router()

router.post('/', converterController)

export default router