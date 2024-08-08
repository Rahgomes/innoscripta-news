import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { NormalizedArticle, Query } from "../../lib/types";
import { tgaArticleFactory } from "../../lib/factories";
import { constructTGAUrl } from "../../lib/api";

export const fetchNewsFromTGA = createAsyncThunk(
  "tgaApi/fetchNews",
  async (queryParams?: Query) => {
    const url = constructTGAUrl(queryParams);

    const response = await axiosInstance.get(url);

    return response.data.response.results.map(tgaArticleFactory);
  }
);

const slice = createSlice({
  name: "tgaApi",
  initialState: {
    articles: [] as NormalizedArticle[],
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
