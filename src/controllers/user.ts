import { RequestHandler } from "express";
import User from "../models/User";
import Topic from '../models/Topic';
import UserTopics from '../models/UserTopic';
import { generateAuthToken } from '../utils/auth';

const getUser: RequestHandler = async (req, res) => {
  try {
    const user = await User.findOne(
      { telegramId: req.params.telegramId },
      { telegramId: 1, id: 1 }
    );

    if (user) {
      const token = await generateAuthToken(
        req.body.username,
        user._id.toString()
      );

      return res.status(200).json({
        token,
      });
    }

    return res.status(404).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

const signUp: RequestHandler = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    const token = await generateAuthToken(
      req.body.username,
      user._id.toString()
    );

    return res.status(201).json({
      success: true,
      token,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    });
  } catch (e: any) {
    const isDuplicate = e.code === 11000;
    res.status(isDuplicate ? 409 : 400).send({
      success: false,
      error: {
        msg: e.message,
      },
    });
  }
};

const logIn: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      username,
      password,
    });

    if (!user?._id) {
      return res.status(404).json({
        success: false,
        error: {
          msg: 'USER_NOT_FOUND',
        },
      });
    }

    const token = await generateAuthToken(username, user._id.toString());
    res.json({
      token,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      telegramId: username.telegramId,
    });
  } catch (e) {
    res.status(500).send({
      success: false,
      error: {
        msg: e,
      },
    });
  }
};

const subscribeToTopic: RequestHandler = async (req, res) => {
  try {
    const { topic: topicShortName } = req.body;

    const topic: any = await Topic.find(
      { shortName: topicShortName },
      { _id: 1 }
    );

    if (!topic.length) {
      throw new Error('TOPIC_NOT_FOUND');
    }

    const remindAt = '5:00 PM';
    const userTopic = new UserTopics({
      topicId: topic[0]._id,
      userId: req.user._id,
      remindAt,
    });

    await userTopic.save();

    res.status(201).json({
      success: true,
      subscription: {
        topicId: topic[0]._id,
        remindAt,
      },
    });
  } catch (e: any) {
    console.log(
      '🚀 ~ file: user.ts:112 ~ constsubscribeToTopic:RequestHandler= ~ e:',
      e
    );
    if (e.message === 'TOPIC_NOT_FOUND') {
      return res.status(404).json({
        success: false,
        error: {
          msg: 'TOPIC_NOT_FOUND',
        },
      });
    }

    if (e.code === 11000) {
      return res.status(409).json({
        success: false,
        error: {
          msg: 'ALREADY_SUBSCRIBED',
        },
      });
    }

    res.status(500).send({
      success: false,
      error: {
        msg: e,
      },
    });
  }
};

export { getUser, signUp, logIn, subscribeToTopic };
