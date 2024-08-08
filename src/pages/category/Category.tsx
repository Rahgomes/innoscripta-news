import { useEffect } from "react";
import Title from "../../components/title";
import { useParams } from "react-router-dom";
import { MAIN_MENU } from "../../lib/constants";
import NewsSourceSection from "../../components/newsSourceSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsFromNYT } from "../../redux/slices/nytApiSlice";
import { fetchNewsFromNAOrg } from "../../redux/slices/naoApiSlice";
import { fetchNewsFromTGA } from "../../redux/slices/tgaApiSlice";
import {
  AppDispatch,
  NewsCategory,
  NormalizedArticle,
  RootState,
} from "../../lib/types";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";

const Category = () => {
  const { category } = useParams();

  const menuItem = MAIN_MENU.find((item) => item.category === category);

  const dispatch = useDispatch<AppDispatch>();
  const nytApi = useSelector((state: RootState) => state.nytApi);
  const naoApi = useSelector((state: RootState) => state.naoApi);
  const tgaApi = useSelector((state: RootState) => state.tgaApi);

  const dados = useSelector((state: RootState) => state.favorites);

  const handleToggleFavorite = (
    category: NewsCategory,
    article: NormalizedArticle
  ) => {
    dispatch(toggleFavorite({ category, article }));
  };

  const isFavorite = (category: NewsCategory, article: NormalizedArticle) => {
    const favorites = dados[category];

    if (favorites) {
      return favorites.some((fav) => fav.url === article.url);
    }

    return false;
  };

  useEffect(() => {
    dispatch(fetchNewsFromNYT({ category: menuItem?.category }));
    dispatch(fetchNewsFromNAOrg({ category: menuItem?.category }));
    dispatch(fetchNewsFromTGA({ category: menuItem?.category }));
  }, [dispatch, category]);

  return (
    <>
      <Title title={menuItem?.title || ""} />

      <NewsSourceSection
        titleSource="News from New York Times"
        sloganSource="All the News That's Fit to Print."
        articles={nytApi.articles.slice(0, 12)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from News Org"
        sloganSource="Search worldwide news."
        articles={naoApi.articles.slice(0, 12)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from The Guardian"
        sloganSource="The breaking news is here."
        articles={tgaApi.articles.slice(0, 12)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default Category;
