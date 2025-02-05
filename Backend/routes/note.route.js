import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { upload } from "../controller/note.controller.js";

import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
  searchNote,
  updateNotePinned,
} from "../controller/note.controller.js";

const router = express.Router();

router.post("/add", verifyToken, upload.single("image"), addNote);
router.post("/edit/:noteId", verifyToken, upload.single("image"), editNote);
router.get("/all", verifyToken, getAllNotes);
router.delete("/delete/:noteId", verifyToken, deleteNote);
router.put("/update-note-pinned/:noteId", verifyToken, updateNotePinned);
router.get("/search", verifyToken, searchNote);

export default router;
