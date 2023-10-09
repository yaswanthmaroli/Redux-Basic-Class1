import { createSlice } from "@reduxjs/toolkit"; // first step import createSlice from @reduxjs/toolkit

// create initial value of state count to 0
const initialState = {
  count: 0,
};

//create a createSlice and inside it have 3 parameter name, initialState and reducers

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// export actions

//for export actions
export const { increment, decrement, reset } = CounterSlice.actions;

//for export reducers
export default CounterSlice.reducer;
