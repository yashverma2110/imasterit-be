import { RequestHandler } from 'express';
import History from '../models/History';

const logHistory: RequestHandler = async (req, res) => {
  try {
    const history = new History({
      ...req.body,
      user: req.user._id,
    });
    const savedHistory = await history.save();
    await History.findOneAndDelete({}, { sort: { createdAt: -1 } });
    res.status(201).json({
      savedHistory,
    });
  } catch (error: any) {
    console.log(
      '🚀 ~ file: history.ts:27 ~ constcreateHistory:RequestHandler= ~ error:',
      error
    );
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export { logHistory };
