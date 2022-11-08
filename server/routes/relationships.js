import { Router } from "express";
import {
  addRelationship,
  getRelationships,
} from "../controllers/relationship.js";

const router = Router();

router.get("/", getRelationships);
router.post("/", addRelationship);

export default router;
