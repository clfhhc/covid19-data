/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import countryAdapter, { Country } from './countryEntity';

const countrySlice = createSlice({
  name: 'country',
  initialState: countryAdapter.getInitialState(),
  reducers: {
    countryReceived: (state, action: PayloadAction<Country[]>) => {
      countryAdapter.setAll(state, action.payload);
    },
  },
});

export default countrySlice.reducer;

export type CountryState = ReturnType<typeof countrySlice['reducer']>;

export interface GlobalCountryState {
  country: CountryState;
}

export const { countryReceived } = countrySlice.actions;
