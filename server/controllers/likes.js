import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { db } from "../connect.js";

dotenv.config();
const { JWT_SECRET } = process.env;

export const getLikes = (req, res, next) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: "Server error",
      });
    }
    return res.status(200).json({
      success: false,
      data: data.map((like) => like.userId),
    });
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Not Logged In!");
  }

  jwt.verify(token, JWT_SECRET, (err, userInfo) => {
    if (err) {
      return res.status(403).json({
        success: false,
        data: "Token is not valid",
      });
    }

    const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?,?)";

    const values = [userInfo.id, req.body.postId];

    db.query(q, values, (err, data) => {
      console.log(err);
      if (err) {
        return res.status(500).json({
          success: false,
          data: "Server err",
        });
      } else {
        return res.status(200).json({
          success: true,
          data: "Post has been liked",
        });
      }
    });
  });
};
