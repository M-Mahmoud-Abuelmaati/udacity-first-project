import express, { Request, Response } from 'express';
import path from 'path';
import resizeImg from './util/resizeImage';

const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Img Route');
});

router.get('/files', async (req: Request, res: Response): Promise<void> => {
  const { width, height, img } = req.query;
  if (img) {
    try {
      const imgLocation = path.join(`${__dirname}../../../public/imgs/${img}`);
      const imgName: string = img.toString().replace('.jpg', '');

      const resizedImgLocation = await resizeImg(
        imgName,
        imgLocation,
        parseInt(width as string),
        parseInt(height as string)
      );

      res.status(200).sendFile(`${resizedImgLocation}`);
    } catch (error) {
      res.status(404).send('Unable to find the specified file');
    }
  } else {
    res.status(404).send('Unable to find the specified file');
  }
});

export default router;
