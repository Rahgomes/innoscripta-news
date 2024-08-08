import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { NormalizedArticle, Query } from "../../lib/types";
import { naoArticleFactory } from "../../lib/factories";
import { constructNAOrgUrl } from "../../lib/api";

export const fetchNewsFromNAOrg = createAsyncThunk(
  "naoApi/fetchNews",
  async (queryParams?: Query) => {
    const url = constructNAOrgUrl(queryParams);

    const response = await axiosInstance.get(url);

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
