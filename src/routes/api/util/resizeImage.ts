import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

const resizeImg = async (
  imgName: string,
  imgLocation: string,
  width: number,
  height: number
) => {
  let resizedImgLocation: string;
  if (width && height) {
    const location = `${__dirname}../../../../public/resizedImgs/${imgName}-${width}x${height}.jpg`;
    const imgLocationExists = path.join(`${location}`);
    const fileExists = await fsPromises
      .readFile(imgLocationExists)
      .then((data) => {
        return data;
      })
      .catch(() => {
        return undefined;
      });

    if (!fileExists) {
      await sharp(imgLocation)
        .resize({
          width,
          height,
        })
        .toFile(`${location}`);
    }

    resizedImgLocation = path.join(`${location}`);
  } else {
    resizedImgLocation = path.join(
      `${__dirname}../../../../public/imgs/${imgName}.jpg`
    );
    await fsPromises
      .readFile(resizedImgLocation)
      .then(() => {
        return resizedImgLocation;
      })
      .catch(() => {
        return (resizedImgLocation = 'Unable to find the specified file');
      });
  }
  return resizedImgLocation;
};

export default resizeImg;
