import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption: action.payload === { carName: 'nan', carCost: 123}
      state.cars.push({
        carName: action.payload.carName,
        carCost: action.payload.carCost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // action.payload === id of the car we want to remove.
      const updatedCars = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
