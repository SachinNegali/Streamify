import {
  Revenue,
  StatsDataState,
  Streams,
  StreamStats,
  TopChart,
  Users,
} from "@/types/statTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StatsDataState = {
  streamStats: {
    totalUsers: 0,
    activeUsers: 0,
    totalStreams: 0,
    revenue: 0,
    topArtist: "",
  },
  users: [],
  topCharts: [],
  streams: [],
  revenue: [],
  loading: false,
  error: null,
};

const statSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setStreamStats: (state, action: PayloadAction<StreamStats>) => {
      state.streamStats = action.payload;
    },
    setUsers: (state, action: PayloadAction<Users[]>) => {
      state.users = action.payload;
    },
    setTopCharts: (state, action: PayloadAction<TopChart[]>) => {
      state.topCharts = action.payload;
    },
    setStreams: (state, action: PayloadAction<Streams[]>) => {
      state.streams = action.payload;
    },
    setRevenue: (state, action: PayloadAction<Revenue[]>) => {
      state.revenue = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStreamStats,
  setUsers,
  setTopCharts,
  setStreams,
  setRevenue,
  setLoading,
  setError,
} = statSlice.actions;
export default statSlice.reducer;
