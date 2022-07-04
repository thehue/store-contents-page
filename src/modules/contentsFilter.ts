import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ContentsFilterState = {
  pricingOptions: string[];
};

const initialState: ContentsFilterState = {
  pricingOptions: [],
};

const contentsFilterSlice = createSlice({
  name: 'contentsFilter',
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

export const contentsFilterActions = contentsFilterSlice.actions;
export default contentsFilterSlice.reducer;
