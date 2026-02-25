import mongoose, { Schema } from "mongoose";

const querySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    page: {
      type: String,
      default: "About Us", // Track which page the enquiry came from
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Query", querySchema)