import * as TYPES from "./types";

export const nytArticleFactory = (
  article: TYPES.nytArticle
): TYPES.NormalizedArticle => ({
  id: article._id,
  title: article.headline.main,
  description: article.snippet,
  url: article.web_url,
  urlToImage:
    article.multimedia.length > 0
      ? `https://static01.nyt.com/${article.multimedia[0].url}`
      : "",
  publishedAt: article.pub_date,
  author: `${article.byline?.person?.[0]?.firstname || "Lorem"} ${article.byline?.person?.[0]?.lastname || "Ipsum"}`,
  source: "New York Times",
  sourceCategory: "newYorkTimes",
});

export const naoArticleFactory = (
  article: TYPES.naoArticle
): TYPES.NormalizedArticle => ({
  id: article.url,
  title: article.title,
  description: article.description,
  url: article.url,
  urlToImage: article.urlToImage,
  publishedAt: article.publishedAt,
  author: article.author || "Lorem Ipsum",
  source: "News Open API",
  sourceCategory: "newsOpenApi",
});

export const tgaArticleFactory = (
  article: TYPES.tgaArticle
): TYPES.NormalizedArticle => ({
  id: article.id,
  title: article.webTitle,
  description: article.webTitle,
  url: article.webUrl,
  urlToImage: "",
  publishedAt: article.webPublicationDate,
  author: "Lorem Ipsum",
  source: "The Guardian",
  sourceCategory: "theGuardian",
});
