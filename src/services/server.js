import express from 'express'
import cors from 'cors'
import mainRouter from '../routes';
import morgan from 'morgan';

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors())
app.use('/api', mainRouter);

app.use((err, req, res, next) => {
    logger.info(err);
    res.status(500).json({
      error: 'an error occurred',
      msg: err.stack
    });
  });



export default app