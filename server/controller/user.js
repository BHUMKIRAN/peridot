import User from "../models/user.js";

export const users = async (_req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
};
