import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsCategory, NormalizedArticle } from "../../lib/types";
import * as CONSTS from "../../lib/constants";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: CONSTS.INITIAL_STATE_FAVORITE,
  reducers: {
    toggleFavorite: (
      state,
      action: PayloadAction<{
        category: NewsCategory;
        article: NormalizedArticle;
      }>
    ) => {
      const { category, article } = action.payload;

      const currentFavorites = state[category];

      const isFavorite = currentFavorites.some(
        (fav) => fav.url === article.url
      );

      if (isFavorite) {
        state[category] = currentFavorites.filter(
          (fav) => fav.url !== article.url
        );
      } else {
        state[category].push(article);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
