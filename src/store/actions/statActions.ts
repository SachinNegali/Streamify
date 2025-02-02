import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "..";
import {
  fetchRevenue,
  fetchStreams,
  fetchStreamStats,
  fetchTopCharts,
  fetchUsers,
} from "../apis/statApis";
import {
  setError,
  setLoading,
  setRevenue,
  setStreams,
  setStreamStats,
  setTopCharts,
  setUsers,
} from "../reducers/statReducer";

export const getStreamStats = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchStreamStats();
    dispatch(setStreamStats(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchUsers();
    dispatch(setUsers(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getTopCharts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchTopCharts();
    dispatch(setTopCharts(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getRevenue = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchRevenue();
    dispatch(setRevenue(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getStreams = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await fetchStreams();
    dispatch(setStreams(data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
