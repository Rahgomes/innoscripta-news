import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE_SEARCH_FILTER } from "../../lib/constants";

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE_SEARCH_FILTER,
  reducers: {
    setSearchKeyword(state, action: PayloadAction<string>) {
      state.searchKeyword = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    setStartDate(state, action: PayloadAction<string>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<string>) {
      state.endDate = action.payload;
    },
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    resetFilters(state) {
      state.searchKeyword = "";
      state.selectedCategory = "";
      state.startDate = "";
      state.endDate = "";
      state.source = "";
    },
  },
});

export const {
  setSearchKeyword,
  setSelectedCategory,
  setStartDate,
  setEndDate,
  setSource,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
