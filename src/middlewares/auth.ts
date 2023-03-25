import { Request, Response, NextFunction } from 'express';

import User from '../models/User';
import { decodeAuthToken } from '../utils/auth';

async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7);

    const decoded: any = decodeAuthToken(token);
    const user = await User.find({ _id: decoded.id });
    req.user = user;
  }

  next();
}

export default checkAuth;
