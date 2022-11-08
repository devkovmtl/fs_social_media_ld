import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { db } from "../connect.js";

const { JWT_SECRET } = process.env;

export const getRelationships = (req, res) => {
  const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        data: "Server err",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: data.map((relationship) => relationship.followerUserId),
      });
    }
  });
};

export const addRelationship = (req, res) => {
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
      "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?, ?)";

    const values = [userInfo.id, req.body.userId];

    db.query(q, values, (err, data) => {
      if (err) {
        return res.status(500).json({ success: false, data: "Server error" });
      }
      return res.status(200).json({ success: true, data: "Following" });
    });
  });
};

export const deleteRelationship = (req, res) => {
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
      "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          data: "Server error",
        });
      }
      return res.status(200).json({
        success: true,
        data: "Unfollow",
      });
    });
  });
};
