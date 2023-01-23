import express from "express";
import {
  deleteHotel,
  getAllHotel,
  getOneHotel,
  newHotel,
  updateHotel,
} from "../controller/hotels.js";

const router = express.Router();

// post new hotel
router.post("/", newHotel);

// Edit an existing hotel
router.put("/:id", updateHotel);

// Delete an existing hotel
router.delete("/:id", deleteHotel);

// get one hotel by id
router.get("/:id", getOneHotel);

// get all existing hotel
router.get("/", getAllHotel);

export default router;
