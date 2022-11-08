import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { db } from "../connect.js";

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
