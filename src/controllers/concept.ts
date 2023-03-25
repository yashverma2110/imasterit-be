import { RequestHandler } from "express";
import Concept from '../models/Concept';

const getARandomConcept: RequestHandler = async (req, res) => {
  try {
    const randomConcept = await Concept.aggregate([{ $sample: { size: 1 } }]);

    res.status(200).json({
      concept: randomConcept,
    });
  } catch (error: any) {
    console.log(
      '🚀 ~ file: concept.ts:12 ~ constgetARandomConcept:RequestHandler= ~ error:',
      error
    );
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
