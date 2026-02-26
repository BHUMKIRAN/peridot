import mongoose from "mongoose";

const pmsSchema = new mongoose.Schema({

  userId: { type: String, required: true }, // assuming each user has unique id
  modelType: { type: String, enum: ["Diamond", "Platinum"], required: true },
  investmentAmount: { type: Number, required: true },
  currentValue: { type: Number, default: 0 }, // current portfolio value (dummy for now)
  lossSharing: {
    clientPercentage: { type: Number, required: true },
    companyPercentage: { type: Number, required: true },
  },
  history: [
    {
      date: { type: Date, default: Date.now },
      value: Number,
      type: { type: String, enum: ["gain", "loss", "initial"] }
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("PMS", pmsSchema);