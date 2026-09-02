import express from "express";

import {
  register,
  login,
  refreshAccessToken,
  logout,
} from "../controllers/authController.js";

import authenticateToken from "../middleware/authmiddleware.js";

const router = express.Router();


router.post("/register", register);

router.post("/login", login);

router.post("/refresh-token", refreshAccessToken);

router.get("/profile", authenticateToken, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user,
  });
});

// Logout
router.post("/logout", logout);

export default router;
