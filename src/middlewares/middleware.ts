import { NextFunction, Request, Response } from 'express';

const checkPath = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Path: ${req.path} Method: ${req.method}`);
  next();
};

export default checkPath;
