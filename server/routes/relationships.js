import { Router } from "express";
import { getRelationships } from "../controllers/relationship.js";

const router = Router();

router.get("/", getRelationships);

export default router;
