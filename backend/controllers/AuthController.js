import UserModel from "../models/UserModel.js"
import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/SecretToken.js"
import jwt from "jsonwebtoken";
export const Signup = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await UserModel.findOne({ email })

    if (existingUser) {
      return res.json({ message: "Email already exists" })
    }
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      username,
      createdAt: new Date(),
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
  next()
}

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.json({ success: false, message: "All fields required" });

    const user = await UserModel.findOne({ email });
    if (!user)
      return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.json({ success: false, message: "Invalid credentials" });

    const token = createSecretToken(user._id)
    res.status(201).json({
      message: "User Login successfully",
      success: true,
      user,
      token
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error" });
  }
};


export const VerifyUser = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.json({ success: false, message: "Token not found" });
    }

    // 1️⃣ Verify token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    if (!decoded) {
      return res.json({ success: false, message: "Invalid token" });
    }
    console.log(decoded.id);

    // 2️⃣ Find user in MongoDB
    const user = await UserModel.findById(decoded.id);
    console.log(user)

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // 3️⃣ Return full user details
    return res.json({
      success: true,
      message: "User verified successfully",
      user,
    });
  } catch (error) {
    console.error("VerifyUser error:", error);
    return res.json({ success: false, message: "Invalid or expired token" });
  }
};






// import UserModel from "../models/UserModel.js";
// import { createSecretToken } from "../utils/SecretToken.js";
// import bcrypt from "bcrypt";

// export const Signup = async (req, res, next) => {
//   try {
//     const { email, password, username, createdAt } = req.body;

//     // 1️⃣ Check if user already exists
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       return res.json({ message: "User already exists" });
//     }

//     // 2️⃣ Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // 3️⃣ Create new user
//     const user = await UserModel.create({
//       email,
//       password: hashedPassword,
//       username,
//       createdAt,
//     });

//     // 4️⃣ Create JWT token
//     const token = createSecretToken(user._id);

//     // 5️⃣ Send cookie securely
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "None",
//     });

//     // 6️⃣ Respond to client
//     res.status(201).json({
//       message: "User signed up successfully",
//       success: true,
//       user,
//     });

//     next();
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ message: "Server error", error });
// }
// };

// export const Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.json({ success: false, message: "All fields required" });

//     const user = await UserModel.findOne({ email });
//     if (!user)
//       return res.json({ success: false, message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.json({ success: false, message: "Invalid credentials" });

//     const token = createSecretToken(user._id)

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false,          // ✅ false for localhost, true only on https
//       sameSite: "None",       // ✅ must for cross-origin cookie
//       path: "/",              // ✅ allow all routes to access cookie
//       maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
//     });


//     res.json({
//       success: true,
//       message: "Login successful",
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Server error" });
//   }
// };

// import jwt from "jsonwebtoken";

// export const VerifyUser = async (req, res) => {
//   try {
//     const token = req.cookies.token; // 👈 Read cookie from browser
//     if (!token) {
//       return res.json({ success: false, message: "No token found" });
//     }

//     // Verify token using same secret key used in createSecretToken
//     const decoded = jwt.verify(token, process.env.TOKEN_KEY);

//     const user = await UserModel.findById(decoded.id).select("-password");
//     if (!user) {
//       return res.json({ success: false, message: "User not found" });
//     }

//     res.json({
//       success: true,
//       message: "User verified",
//       user,
//     });
//   } catch (error) {
//     res.json({ success: false, message: "Invalid or expired token" });
//   }
// };

