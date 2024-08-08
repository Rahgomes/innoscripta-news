import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apiConfig/axiosInstance";
import { constructNAOrgUrl } from "../../lib/api";
import * as FACTORY from "../../lib/factories";
import * as TYPES from "../../lib/types";

export const fetchNewsFromNAOrg = createAsyncThunk(
  "naoApi/fetchNews",
  async (queryParams?: TYPES.Query) => {
    const url = constructNAOrgUrl(queryParams);

    const response = await axiosInstance.get(url);

    return response.data.articles.map(FACTORY.naoArticleFactory);
  }
);

const slice = createSlice({
  name: "naoApi",
  initialState: {
    articles: [] as TYPES.NormalizedArticle[],
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
