import { RequestHandler } from 'express';
import Topic from '../models/Topic';

export const getAllTopics: RequestHandler = async (req, res) => {
  try {
    const topics = await Topic.find({});
    res.status(200).json({
      topics,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export const createTopic: RequestHandler = async (req, res) => {
  try {
    const topic = new Topic(req.body);
    const savedTopic = await topic.save();
    res.status(201).json({
      savedTopic,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: topics.ts:25 ~ constcreateTopic:RequestHandler= ~ error:',
      error
    );
    return res.status(500).json({
      error,
    });
  }
};
