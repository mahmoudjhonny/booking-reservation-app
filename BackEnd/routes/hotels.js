import express from "express";
import {
  countByCity,
  countByType,
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
router.get("/find/:id", getOneHotel);

// get all existing hotel
router.get("/", getAllHotel);

// Count hotels in city
router.get("/countByCity", countByCity);

// Count hotels by types
router.get("/countByType", countByType);

export default router;
