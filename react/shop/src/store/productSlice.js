import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    countAdd(state, action) {
      let id = state.findIndex((i) => {
        return i.id === action.payload;
      });
      state[id].count++;
    },
    cartAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export let { countAdd, cartAdd } = cart.actions;

export default cart;
