import express, { Request, Response } from 'express';
import images from './api/images';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Index Route');
});

router.use('/api', images);

export default router;
