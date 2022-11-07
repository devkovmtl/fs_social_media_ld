import { Router } from "express";
import { addLike, getLikes } from "../controllers/likes.js";

const router = Router();

router.get("/", getLikes);
router.post("/", addLike);

export default router;
