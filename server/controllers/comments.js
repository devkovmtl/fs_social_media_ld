import jwt from "jsonwebtoken";
import moment from "moment";
import { db } from "../connect.js";

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
