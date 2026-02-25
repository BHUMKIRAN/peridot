// src/api/pmsApi.js
import axios from "axios";

const getBaseUrl = (): string | null => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiBaseUrl) {
    return null;
  }
  return `${apiBaseUrl.replace(/\/$/, "")}/pms`;
};

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
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    return [];
  }

  const res = await axios.get<PMS[]>(`${baseUrl}/all`);
  return res.data;
};

export const createPMS = async (data: CreatePMSPayload): Promise<PMS> => {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL in environment variables");
  }

  const res = await axios.post<PMS>(`${baseUrl}/pms`, data);
  return res.data;
};

export const simulateLoss = async (
  data: SimulateLossPayload
): Promise<PMS[]> => {
  const baseUrl = getBaseUrl();
  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL in environment variables");
  }

  const res = await axios.post<PMS[]>(`${baseUrl}/simulateLoss`, data);
  return res.data;
};
