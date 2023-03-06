import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
       message: "Petición desde el SERVIDOR -> ROUTER"
   })
})

export default router;