import { configureStore } from "@reduxjs/toolkit"; // import configure store from @reduxjs/toolkit
import CounterReducer from "./features/counter/CounterSlice";

// inside configureStore there is an object which holds reducer.
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
