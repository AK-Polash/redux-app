import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
    amount: 10,
    naam: "A.K. Polash",
    max: "Max item",
    min: "Min item",
  },

  reducers: {
    increment: (state, action) => {
      state.value += 1;

      if (state.value >= action.payload) {
        state.value = action.payload;
        state.naam = state.max;
      }
    },
    decrement: (state, action) => {
      state.value -= 1;

      if (state.value < action.payload) {
        state.value = action.payload;
        state.naam = state.min;
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
