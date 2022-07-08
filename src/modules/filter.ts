import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  pricingOptions: string[];
  page: number;
};

export const initialState: FilterState = {
  pricingOptions: [],
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    initialize(state) {
      state = initialState;
    },
    setPricingOptions(state, action: PayloadAction<string[]>) {
      state.pricingOptions = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    increasePage(state) {
      state.page = state.page + 1;
    },
    decreasePage(state) {
      state.page = state.page - 1;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
