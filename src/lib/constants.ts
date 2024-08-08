import * as TYPES from "./types";

export const INITIAL_STATE_FAVORITE: TYPES.FavoriteState = {
  newsOpenApi: [],
  newYorkTimes: [],
  theGuardian: [],
};

export const MAIN_MENU = [
  { id: "menuItem01", link: "/", category: "", title: "Home" },
  {
    id: "menuItem02",
    link: "/category/sports",
    category: "sports",
    title: "Sports",
  },
  {
    id: "menuItem03",
    link: "/category/business",
    category: "business",
    title: "Business",
  },
  {
    id: "menuItem04",
    link: "/category/international",
    category: "international",
    title: "International",
  },
];

export const INITIAL_STATE_SEARCH_FILTER: TYPES.FilterState = {
  searchKeyword: "",
  selectedCategory: "",
  startDate: "",
  endDate: "",
  source: "",
};
