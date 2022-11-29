import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    item: 0,
    amount: 10,
    naam: "Enter item number",
  },

  reducers: {
    increment: (state, action) => {
      state.item += 1;

      if (state.item >= action.payload) {
        state.item = action.payload;
        state.naam = "Max item selected";
      } else {
        state.naam = "Available item";
      }
    },
    decrement: (state, action) => {
      state.item -= 1;

      if (state.item <= action.payload) {
        state.item = action.payload;
        state.naam = "Min item selected";
      } else {
        state.naam = "Available item";
      }
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;

      if (state.amount >= 20) {
        state.amount = 20;
      }
    },
    decrementByAmount: (state, action) => {
      state.amount -= action.payload;
      if (state.amount < 0) {
        state.amount = 0;
      }
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
