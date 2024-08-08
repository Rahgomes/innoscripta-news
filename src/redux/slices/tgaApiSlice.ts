import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";
import { NormalizedArticle, Query } from "../../lib/types";
import { tgaArticleFactory } from "../../lib/factories";

export const fetchNewsFromTGA = createAsyncThunk(
  "tgaApi/fetchNews",
  async (queryParams?: Query) => {
    const query =
      queryParams?.keyword || queryParams?.category || "international";
    const rangeDate = `from-date=${queryParams?.rangeDate?.startDate || "2014-01-01"}`;
    // const rangeDate = `from-date=2014-01-01`;

    const response = await axiosInstance.get(
      `https://content.guardianapis.com/search?q=${query}&${rangeDate}&api-key=b3c337a5-ad72-4dc5-97e8-51c0814aa782`
    );

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
