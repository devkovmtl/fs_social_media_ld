import { Router } from "express";
import { getLikes } from "../controllers/likes.js";

const router = Router();

router.get("/", getLikes);

export default router;
