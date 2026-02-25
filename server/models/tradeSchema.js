import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true, // e.g., "BTC", "AAPL"
    },
    price: {
      type: Number,
      required: true, // current price
    },
    change: {
      type: Number,
      default: 0, // price change since last record
    },
    percentChange: {
      type: Number,
      default: 0, // % change since last record
    },
    high: {
      type: Number,
      default: 0, // highest price in a period
    },
    low: {
      type: Number,
      default: 0, // lowest price in a period
    },
    volume: {
      type: Number,
      default: 0, // traded volume in a period
    },
    timestamp: {
      type: Date,
      default: Date.now, // time of this price update
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

export default mongoose.model("Trade", tradeSchema);