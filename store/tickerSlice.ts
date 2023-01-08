import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface TickerState {
  tickerState: string;
}

const initialState: TickerState = {
  tickerState: '',
};

// Actual Slice
export const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    // Action to set the authentication status
    setTickerState(state, action) {
      state.tickerState = action.payload;
    },
  },
});

export const { setTickerState } = tickerSlice.actions;

export const selectTickerState = (state: AppState) => state.ticker.tickerState;

export default tickerSlice.reducer;
