import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  pricingOptions: string[];
};

export const initialState: FilterState = {
  pricingOptions: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    initialize(state) {
      state.pricingOptions = initialState.pricingOptions;
    },
    setPricingOptions(state, action: PayloadAction<string[]>) {
      state.pricingOptions = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
