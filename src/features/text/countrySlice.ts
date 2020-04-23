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
