import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { constructNYTUrl } from "../../lib/api";
import * as FACTORY from "../../lib/factories";
import * as TYPES from "../../lib/types";

export const fetchNewsFromNYT = createAsyncThunk(
  "nytApi/fetchNews",
  async (queryParams?: TYPES.Query) => {
    const url = constructNYTUrl(queryParams);

    const response = await axiosInstance.get(url);

    return response.data.response.docs.map(FACTORY.nytArticleFactory);
  }
);

const slice = createSlice({
  name: "nytApi",
  initialState: {
    articles: [] as TYPES.NormalizedArticle[],
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
