import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  pricingOptions: string[];
};

const initialState: FilterState = {
  pricingOptions: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    initialize(state) {
      state.pricingOptions = initialState.pricingOptions;
    },
    togglePricingOptions(state, action: PayloadAction<string>) {
      const { pricingOptions } = state;
      const { payload } = action;
      if (pricingOptions.includes(payload)) {
        state.pricingOptions = pricingOptions.filter(
          (pricingOption) => pricingOption === payload,
        );
      } else {
        state.pricingOptions.push(payload);
      }
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
