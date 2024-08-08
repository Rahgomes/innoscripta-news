import store from "../redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type naoArticle = {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type nytArticle = {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: {
    type: string;
    url: string;
    height: number;
    width: number;
  }[];
  headline: {
    main: string;
  };
  keywords: [];
  pub_date: string;
  document_type: string;
  byline: {
    original: string;
    organization: string;
    person: {
      firstname: string;
      lastname: string;
    }[];
  };
  word_count: number;
  uri: string;
  _id: string;
};

export type tgaArticle = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  pillarId: string;
  pillarName: string;
};

export type FavoriteState = {
  newsOpenApi: NormalizedArticle[];
  newYorkTimes: NormalizedArticle[];
  theGuardian: NormalizedArticle[];
};

export type NormalizedArticle = {
  id: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: string;
  author: string;
  sourceCategory: string;
};

export type NewsCategorySectionProps = {
  titleSource: string;
  sloganSource: string;
  articles: NormalizedArticle[];
  onClick: (category: NewsCategory, article: NormalizedArticle) => void;
  isFavorite: (category: NewsCategory, article: NormalizedArticle) => boolean;
};

export type FavButtonProps = {
  onClick: () => void;
  isFavorite: boolean;
};

export type NewsCategory = "newsOpenApi" | "newYorkTimes" | "theGuardian";

export type TitleProps = {
  title: string;
};

export type FilterState = {
  searchKeyword: string;
  selectedCategory: string;
  startDate: string;
  endDate: string;
  source: string;
};

export type Query = {
  keyword?: string;
  category?: string;
  rangeDate?: {
    startDate?: string;
    endDate?: string;
  };
};
