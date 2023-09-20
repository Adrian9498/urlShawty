import { Router } from "express";
import { createUrl,visitSite } from "../controllers/url.controller.js";
const router = Router();

router.get('/:shorter',visitSite)
router.post("/create",createUrl);

export default router