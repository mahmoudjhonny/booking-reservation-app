import express from "express";
import {
  deleteHotel,
  getAllHotel,
  getOneHotel,
  newHotel,
  updateHotel,
} from "../controller/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// post new hotel
router.post("/", verifyAdmin, newHotel);

// Edit an existing hotel
router.put("/:id", verifyAdmin, updateHotel);

// Delete an existing hotel
router.delete("/:id", verifyAdmin, deleteHotel);

// get one hotel by id
router.get("/:id", getOneHotel);

// get all existing hotel
router.get("/", getAllHotel);

export default router;
