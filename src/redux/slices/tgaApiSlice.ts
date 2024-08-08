import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { constructTGAUrl } from "../../lib/api";
import * as TYPES from "../../lib/types";
import * as FACTORY from "../../lib/factories";

export const fetchNewsFromTGA = createAsyncThunk(
  "tgaApi/fetchNews",
  async (queryParams?: TYPES.Query) => {
    const url = constructTGAUrl(queryParams);

    const response = await axiosInstance.get(url);

    return response.data.response.results.map(FACTORY.tgaArticleFactory);
  }
);

const slice = createSlice({
  name: "tgaApi",
  initialState: {
    articles: [] as TYPES.NormalizedArticle[],
    status: "idle",
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsFromTGA.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsFromTGA.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNewsFromTGA.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message || "";
      });
  },
});

export default slice.reducer;
