import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import { authUser, getUserProfile } from "../controller/userController.js";

router.post("/login", authUser);

router.route("/profile").get(protect, getUserProfile);

export default router;
