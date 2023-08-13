import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  yfinanceData: any; // Replace with your actual data type
}

const initialState: RootState = {
  yfinanceData: null,
};

const yfinanceSlice = createSlice({
  name: 'yfinance',
  initialState,
  reducers: {
    setYFinanceData: (state, action) => {
      state.yfinanceData = action.payload;
    },
  },
});

export const { setYFinanceData } = yfinanceSlice.actions;

export default yfinanceSlice.reducer;
