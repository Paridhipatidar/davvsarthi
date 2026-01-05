import express from "express";
import { checkEligibility } from "../logic/eligibility.logic.js";

const router = express.Router();

router.post("/eligibility", (req, res) => {
  const { marks, category, course } = req.body;

  if (!marks || !category || !course) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const result = checkEligibility(marks, category, course);
  res.json(result);
});

export default router;
