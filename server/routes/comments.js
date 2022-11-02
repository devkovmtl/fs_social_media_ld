import { Router } from "express";
import { getComment } from "../controllers/comments.js";

const router = Router();

router.get("/", getComment);

export default router;
