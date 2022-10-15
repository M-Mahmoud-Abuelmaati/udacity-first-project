import sharp from 'sharp';
import path from 'path';
import fs, { promises as fsPromises } from 'fs';

const resizeImg = async (
  imgName: string,
  imgLocation: string,
  width: number,
  height: number
): Promise<string> => {
  let resizedImgLocation: string;
  if (width && height) {
    const dirLocation = path.join(__dirname, `/../../../public/resizedImgs/`);
    const location = path.join(
      dirLocation,
      `${imgName}-${width}x${height}.jpg`
    );

    const fileExists = await fsPromises
      .readFile(location)
      .then((data): Buffer => {
        return data;
      })
      .catch((): undefined => {
        return undefined;
      });

    if (!fileExists) {
      if (!fs.existsSync(dirLocation)) {
        try {
          fs.mkdirSync(dirLocation);
        } catch (error) {
          console.log(error);
        }
      }
      await sharp(imgLocation)
        .resize({
          width,
          height,
        })
        .toFile(location);
    }

    resizedImgLocation = location;
  } else {
    resizedImgLocation = path.join(
      __dirname,
      `../../../public/imgs/${imgName}.jpg`
    );
    await fsPromises
      .readFile(resizedImgLocation)
      .then((): string => {
        return resizedImgLocation;
      })
      .catch((): string => {
        return (resizedImgLocation = 'Unable to find the specified file');
      });
  }
  return resizedImgLocation;
};

export default resizeImg;
