import { configureStore } from "@reduxjs/toolkit";
import nytApiReducer from "./slices/nytApiSlice";
import naoApiReducer from "./slices/naoApiSlice";
import tgaApiReducer from "./slices/tgaApiSlice";
import favoriteReducer from "./slices/favoriteSlice";
import searchFilterReducer from "./slices/searchFilterSlice";

const store = configureStore({
  reducer: {
    nytApi: nytApiReducer,
    naoApi: naoApiReducer,
    tgaApi: tgaApiReducer,
    favorites: favoriteReducer,
    filter: searchFilterReducer,
  },
});

export default store;
