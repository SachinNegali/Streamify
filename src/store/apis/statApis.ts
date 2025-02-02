import axiosClient from "@/lib/axiosClient";

export const fetchStreamStats = async () => {
  const response = await axiosClient.get(`streamStats`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await axiosClient.get(`users`);
  return response.data;
};

export const fetchTopCharts = async () => {
  const response = await axiosClient.get(`topChart`);
  return response.data;
};

export const fetchRevenue = async () => {
  const response = await axiosClient.get(`revenue`);
  return response.data;
};

export const fetchStreams = async () => {
  const response = await axiosClient.get(`streams`);
  return response.data;
};
