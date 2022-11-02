import bcrypt from "bcryptjs";
import { db } from "../connect.js";

export const register = (req, res, next) => {
  // Username Email Password Name
  const { username, email, password, name } = req.body;
  if (!username || !email || !password || !name) {
    return res.json({
      success: false,
      data: "Every fields are required",
    });
  }
  // Check user if exist
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [username], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: "Server Error",
      });
    }
    if (data.length) {
      return res.status(409).json({
        success: false,
        data: "User already exist",
      });
    }

    // hash password
    const salt = bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // create new user
    const q =
      "INSERT INTO users (`username`, `email`, `password`, `name`) VALUES (?,?,?,?)";

    const values = [username, email, hashedPassword, name];

    db.query(q, values, (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          data: "Server Error",
        });
      }
      return res.json({
        success: true,
        data: "User has been created.",
      });
    });
  });
};

export const login = (req, res, next) => {
  res.json({
    success: true,
    data: "Login",
  });
};

export const logout = (req, res, next) => {
  res.json({
    success: true,
    data: "Logout",
  });
};
