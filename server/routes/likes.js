import { Router } from "express";
import { getLike } from "../controllers/likes.js";
const router = Router();

router.get("/", getLike);

export default router;
