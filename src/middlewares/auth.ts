import { Request, Response, NextFunction } from 'express';

import User from '../models/User';
import { decodeAuthToken } from '../utils/auth';

async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  try {
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7);

      if (!token) {
        throw Error('Unauthorized');
      }

      const decoded: any = decodeAuthToken(token);
      const user = await User.find({ _id: decoded.id });
      req.user = user;
    } else {
      throw Error('Unauthorized');
    }
  } catch (error) {
    return res.status(401).send(error);
  }

  next();
}

export default checkAuth;
