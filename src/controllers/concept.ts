import mongoose from 'mongoose';
import { RequestHandler } from 'express';
import Concept from '../models/Concept';

const getARandomConcept: RequestHandler = async (req, res) => {
  try {
    const topicId = new mongoose.Types.ObjectId(req.params.topicId);

    const randomConcept = await Concept.aggregate([
      { $match: { topicId } },
      { $sample: { size: 1 } },
    ]);

    res.status(200).json({
      concept: randomConcept,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const createConcept: RequestHandler = async (req, res) => {
  try {
    const concept = new Concept(req.body);
    const savedConcept = await concept.save();
    res.status(201).json({
      savedConcept,
    });
  } catch (error: any) {
    console.log(
      '🚀 ~ file: concept.ts:27 ~ constcreateConcept:RequestHandler= ~ error:',
      error
    );
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export { getARandomConcept, createConcept };
