// src/api/pmsApi.js
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_API_URL in environment variables");
}

const BASE_URL = `${API_BASE_URL.replace(/\/$/, "")}/pms`;

export interface LossSharing {
  clientPercentage: number;
  companyPercentage: number;
}

export interface PMS {
  _id: string;
  userId: string;
  modelType: string;
  investmentAmount: number;
  currentValue: number;
  lossSharing: LossSharing;
}

export interface CreatePMSPayload {
  userId: string;
  modelType: string;
  investmentAmount: number;
}

export interface SimulateLossPayload {
  modelType: string;
  lossPercentage: number;
}

export const fetchAllPMS = async (): Promise<PMS[]> => {
  const res = await axios.get<PMS[]>(`${BASE_URL}/all`);
  return res.data;
};

export const createPMS = async (data: CreatePMSPayload): Promise<PMS> => {
  const res = await axios.post<PMS>(`${BASE_URL}/pms`, data);
  return res.data;
};

export const simulateLoss = async (
  data: SimulateLossPayload
): Promise<PMS[]> => {
  const res = await axios.post<PMS[]>(`${BASE_URL}/simulateLoss`, data);
  return res.data;
};
