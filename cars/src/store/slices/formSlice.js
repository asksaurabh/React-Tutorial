import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    carName: '',
    carCost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.carName = action.payload;
    },
    changeCost(state, action) {
      state.carCost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.carName = '';
      state.carCost = '';
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
