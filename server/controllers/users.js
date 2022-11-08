import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { db } from "../connect.js";
dotenv.config();

const { JWT_SECRET } = process.env;

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

export const updateUser = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ success: false, data: "Not logged in!" });
  }
  jwt.verify(token, JWT_SECRET, (err, userInfo) => {
    if (err) {
      return res.status(403).json({
        success: false,
        data: "Token is not valid!",
      });
    }

    const q =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePic`=?,`coverPic`=? WHERE id=? ";

    db.query(
      q,
      [
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.coverPic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) {
          return res.status(500).json({ success: false, data: "Server error" });
        }
        if (data.affectedRows > 0) {
          return res.json({ success: true, data: "Updated!" });
        }
        return res
          .status(403)
          .json({ success: false, data: "You can update only your post!" });
      }
    );
  });
};
