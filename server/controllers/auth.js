import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { db } from "../connect.js";

const { JWT_SECRET } = process.env;

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
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({
      success: false,
      data: "Every fields are required",
    });
  }
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [username], (err, data) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: "Server Error",
      });
    }
    // check user exist
    if (data.length === 0) {
      return res.status(401).json({
        success: false,
        data: "Invalid credentials",
      });
    }

    // check password
    const checkPassword = bcrypt.compareSync(password, data[0].password);

    if (!checkPassword) {
      return res
        .status(400)
        .json({ success: false, data: "Invalid credentials" });
    }

    // create jwb
    const token = jsonwebtoken.sign({ id: data[0].id }, JWT_SECRET);

    // dont send the password
    const { password: pwd, ...others } = data[0];

    return res
      .status(200)
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .json({
        success: true,
        data: others,
      });
  });
};

export const logout = (req, res, next) => {
  return res
    .status(200)
    .clearCookie("accessToken", { secure: true, sameSite: "none" })
    .json({
      success: true,
      data: "User has been logged out",
    });
};
