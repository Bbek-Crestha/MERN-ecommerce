import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
	authUser,
	registerUser,
	getUserProfile,
} from "../controller/userController.js";

router.post("/login", authUser);

router.route("/profile").get(protect, getUserProfile);

router.post("/", registerUser);

export default router;
