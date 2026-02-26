import mongoose from "mongoose";
import PMS from "./models/pms.js"; // Adjust path to your model
import dotenv from "dotenv";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🌱 Connected to MongoDB for seeding...");

    // Clear existing data to start fresh
    await PMS.deleteMany({});

    const users = ["user_alex_123", "user_julia_456"];
    const dummyPMS = [];

    users.forEach((userId) => {
      // Create a Diamond Account
      dummyPMS.push({
        userId,
        modelType: "Diamond",
        investmentAmount: 1000000,
        currentValue: 950000, // Simulated slight loss
        lossSharing: { clientPercentage: 50, companyPercentage: 50 },
        createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      });

      // Create a Platinum Account
      dummyPMS.push({
        userId,
        modelType: "Platinum",
        investmentAmount: 500000,
        currentValue: 525000, // Simulated gain
        lossSharing: { clientPercentage: 60, companyPercentage: 40 },
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      });
    });

    await PMS.insertMany(dummyPMS);
    console.log("✅ Database Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedData();