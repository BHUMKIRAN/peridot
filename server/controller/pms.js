// controllers/pmsController.js
import pmsSchema from "../models/pms.js";

// Create PMS Account
const createPMS = async (req, res) => {
  try {
    const { userId, modelType, investmentAmount } = req.body;

    let lossSharing = {};
    if (modelType === "Diamond") {
      lossSharing = { clientPercentage: 50, companyPercentage: 50 };
    } else if (modelType === "Platinum") {
      lossSharing = { clientPercentage: 60, companyPercentage: 40 };
    }

    const newPMS = await pmsSchema.create({
      userId,
      modelType,
      investmentAmount,
      currentValue: investmentAmount, // dummy initial value
      lossSharing,
    });

    res.status(201).json(newPMS);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Simulate Loss
const simulateLoss = async (req, res) => {
  try {
    const { pmsId, lossAmount } = req.body;

    const pms = await PMSModel.findById(pmsId);
    if (!pms) return res.status(404).json({ message: "PMS account not found" });

    // Calculate loss distribution
    const clientLoss = (lossAmount * pms.lossSharing.clientPercentage) / 100;
    const companyLoss = (lossAmount * pms.lossSharing.companyPercentage) / 100;

    // Update currentValue
    pms.currentValue -= clientLoss;
    await pms.save();

    res.status(200).json({
      message: "Loss simulated",
      clientLoss,
      companyLoss,
      updatedValue: pms.currentValue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All PMS Accounts
const getAllPMS = async (req, res) => {
  try {
    const allPMS = await PMSModel.find();
    res.status(200).json(allPMS);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// controllers/pmsController.js

export const getChartData = async (req, res) => {
  try {
    const allPMS = await pmsSchema.find();
    
    // Transform the data so Recharts can read it
    // We map investment vs current value to show profit/loss
    const formattedData = allPMS.map((pms) => {
      const profitOrLoss = pms.currentValue - pms.investmentAmount;
      return {   // e.g., "Diamond Account"
        amount: profitOrLoss, // This will be negative if current < investment
        fill: profitOrLoss >= 0 ? "#10b981" : "#ef4444" // Green for gain, Red for loss
      };
    });

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createPMS, simulateLoss, getAllPMS };