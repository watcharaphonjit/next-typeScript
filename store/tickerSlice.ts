import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { TickerStreamWS } from "../pages/quize2/providers/tickerStream";
import { TickersResponseTransformed } from "../pages/quize1/providers/market";

export interface TickerState {
  tickerState: string;
  loading: boolean;
  tickerList: TickersResponseTransformed[];
  error: string;
  tickerStreamState: TickerStreamWS[];
}

const initialState: TickerState = {
  tickerState: "",
  loading: false,
  tickerList: null,
  error: "",
  tickerStreamState: null,
};

export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    setTickerState(state, action) {
      state.tickerState = action.payload;
    },
    setTickerList(state, action) {
      state.tickerList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setTickerStreamState(state, action) {
      state.tickerStreamState = action.payload;
    },
  },
});

export const {
  setTickerState,
  setTickerList,
  setLoading,
  setError,
  setTickerStreamState,
} = tickerSlice.actions;

export const selectTickerState = (state: AppState) => state.ticker.tickerState;
export const tickerList = (state: AppState) => state.ticker.tickerList;
export const loading = (state: AppState) => state.ticker.loading;
export const error = (state: AppState) => state.ticker.error;
export const tickerStreamState = (state: AppState) => state.ticker.tickerStreamState;

export default tickerSlice.reducer;
