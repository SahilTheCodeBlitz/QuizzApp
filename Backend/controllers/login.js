const bcrypt = require("bcrypt");
const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    } else {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };

      // Sign the JWT token
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 8, // 8 hours
      });

      const tokenOption = {
        httpOnly: true,
        secure: true,
      };

      // Send the token along with the userId in the response
      res.cookie("token", token, tokenOption).json({
        message: "User logged in successfully",
        success: true,
        token: token, // include the token in the response
        userId: user._id, // pass the userId explicitly
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = login;
