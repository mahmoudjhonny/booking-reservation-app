import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from Auth");
});

router.get("/register", (req, res) => {
  res.send("Hello from Auth");
});

export default router;
