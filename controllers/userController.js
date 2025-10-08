import bcrypt from "bcrypt";
import User from "../models/user.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 2. Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create new user
    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
