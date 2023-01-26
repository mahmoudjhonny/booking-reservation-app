import express from "express";
import {
  deleteUser,
  getAllUser,
  getOneUser,
  updateUser,
} from "../controller/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Update User Info
router.put("/:id", verifyUser, updateUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get User Info
router.get("/:id", verifyUser, getOneUser);

// Get All Users
router.get("/", verifyAdmin, getAllUser);

export default router;
