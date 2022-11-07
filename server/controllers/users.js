import jwt from "jsonwebtoken";
import { db } from "../connect.js";

// Get all users
export const getUser = (req, res, next) => {
  const { userId } = req.params;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: "Server error",
      });
    }

    if (!data.length) {
      return res.status(403).json({
        success: false,
        data: "No user found",
      });
    }

    const { password, ...info } = data[0];
    return res.status(200).json({
      success: true,
      data: info,
    });
  });
};
