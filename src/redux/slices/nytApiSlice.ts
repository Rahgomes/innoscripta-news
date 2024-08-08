import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";
import { NormalizedArticle, Query } from "../../lib/types";
import { nytArticleFactory } from "../../lib/factories";
import { getFormattedDate } from "../../lib/utils";

export const fetchNewsFromNYT = createAsyncThunk(
  "nytApi/fetchNews",
  async (queryParams?: Query) => {
    const query =
      queryParams?.keyword || queryParams?.category || "international";
    const rangeDate = `begin_date=${queryParams?.rangeDate?.startDate || getFormattedDate(new Date())}&end_date=${queryParams?.rangeDate?.endDate || getFormattedDate(new Date())}`;

    const response = await axiosInstance.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&${rangeDate}&api-key=F7paSKHxiKstJxVoGIuS57qQR0Lz6An6`
    );

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
