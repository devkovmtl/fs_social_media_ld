import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import moment from "moment";
import { db } from "../connect.js";
dotenv.config();

const { JWT_SECRET } = process.env;

export const getComments = (req, res, next) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
  WHERE c.postId = ? ORDER BY c.createdAt DESC
  `;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: "Server error",
      });
    }
    return res.status(200).json({
      success: false,
      data: data,
    });
  });
};

export const addComment = (req, res) => {
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
      "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postId`) VALUES (?, ?, ?, ?)";

    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];

    db.query(q, values, (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          data: "Server error",
        });
      }

      return res.status(200).json({
        success: true,
        data: "Comment has been created",
      });
    });
  });
};
