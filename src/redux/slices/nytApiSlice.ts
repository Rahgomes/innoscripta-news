import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { NormalizedArticle, Query } from "../../lib/types";
import { nytArticleFactory } from "../../lib/factories";
import { constructNYTUrl } from "../../lib/api";

export const fetchNewsFromNYT = createAsyncThunk(
  "nytApi/fetchNews",
  async (queryParams?: Query) => {
    const url = constructNYTUrl(queryParams);

    const response = await axiosInstance.get(url);

    return response.data.response.docs.map(nytArticleFactory);
  }
);

const slice = createSlice({
  name: "nytApi",
  initialState: {
    articles: [] as NormalizedArticle[],
    status: "idle",
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsFromNYT.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsFromNYT.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNewsFromNYT.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message || "";
      });
  },
});

export default slice.reducer;
