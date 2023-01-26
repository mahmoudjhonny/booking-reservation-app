import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getOneRoom,
  updateRoom,
} from "../controller/room.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// post new hotel
router.post("/:hotelId", verifyAdmin, createRoom);

// Edit an existing hotel
router.put("/:id", verifyAdmin, updateRoom);

// Delete an existing hotel
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

// get one hotel by id
router.get("/:id", getOneRoom);

// get all existing hotel
router.get("/", getAllRoom);

export default router;
