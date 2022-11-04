import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
dotenv.config();

import { db } from "../connect.js";

const { JWT_SECRET } = process.env;

export const getPosts = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("TOKEN", token);
  if (!token) {
    return res.status(401).json({
      success: false,
      data: "Not logged in",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, userInfo) => {
    if (err) {
      return res.status(403).json({
        success: false,
        data: "Token is not valid",
      });
    }

    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationships AS r  ON (p.userId = r.followedUserId AND r.followerUserId) WHERE r.followedUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          data: "Server Error",
        });
      }

      return res.json({
        success: true,
        data,
      });
    });
  });
};

export const addPost = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({
      success: false,
      data: "Not logged in",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, userInfo) => {
    if (err) {
      return res.status(403).json({
        success: false,
        data: "Token is not valid",
      });
    }

    const q =
      "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?,?,?,?)";

    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          data: "Server Error",
        });
      }

      return res.json({
        success: true,
        data: "Post has been created",
      });
    });
  });
};
