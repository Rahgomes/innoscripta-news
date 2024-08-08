import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";
import { NormalizedArticle, Query } from "../../lib/types";
import { naoArticleFactory } from "../../lib/factories";
import { formatDate2 } from "../../lib/utils";

export const fetchNewsFromNAOrg = createAsyncThunk(
  "naoApi/fetchNews",
  async (queryParams?: Query) => {
    const date = new Date();
    date.setDate(date.getDate() - 15);

    const query =
      queryParams?.keyword || queryParams?.category || "international";
    const rangeDate = `from=${queryParams?.rangeDate?.startDate || formatDate2(date)}&to=${queryParams?.rangeDate?.endDate || formatDate2(new Date())}`;

    const response = await axiosInstance.get(
      `https://newsapi.org/v2/everything?q=${query}&${rangeDate}&apiKey=f01b596f50554730946205bf49502ae6`
    );

    return response.data.articles.map(naoArticleFactory);
  }
);

const slice = createSlice({
  name: "naoApi",
  initialState: {
    articles: [] as NormalizedArticle[],
    status: "idle",
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsFromNAOrg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsFromNAOrg.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNewsFromNAOrg.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.error.message || "";
      });
  },
});

export default slice.reducer;
