import express from 'express';
import * as noteController from '../controllers/note.controller';

const router = express.Router();
router.get('', noteController.getNotes)
router.post('', noteController.createNote)

export default router;