import { Router } from "express";
import {
  addRelationship,
  deleteRelationship,
  getRelationships,
} from "../controllers/relationship.js";

const router = Router();

router.get("/", getRelationships);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

export default router;
