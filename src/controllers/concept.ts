import { RequestHandler } from 'express';
import CONCEPTS from '../utils/constants';

const getARandomConcept: RequestHandler = async (req, res) => {
  try {
    const randomConceptIndex = Math.floor(Math.random() * CONCEPTS.length);

    res.status(200).json({
      data: CONCEPTS[randomConceptIndex],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export { getARandomConcept };
