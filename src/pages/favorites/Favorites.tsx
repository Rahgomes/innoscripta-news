import { useDispatch, useSelector } from "react-redux";

import NewsSourceSection from "../../components/newsSourceSection";
import {
  AppDispatch,
  NewsCategory,
  NormalizedArticle,
  RootState,
} from "../../lib/types";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import Title from "../../components/title";

const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);

  const handleToggleFavorite = (
    category: NewsCategory,
    article: NormalizedArticle
  ) => {
    dispatch(toggleFavorite({ category, article }));
  };

  const isFavorite = (category: NewsCategory, article: NormalizedArticle) => {
    const favoritesByCategory = favorites[category];

    if (favoritesByCategory) {
      return favoritesByCategory.some((fav) => fav.url === article.url);
    }

    return false;
  };

  return (
    <div className="bg-gray-100">
      <Title title="Favorites" />

      <NewsSourceSection
        titleSource="News from New York Times"
        sloganSource="All the News That's Fit to Print."
        articles={favorites.newYorkTimes}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from News Org"
        sloganSource="Search worldwide news."
        articles={favorites.newsOpenApi}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from The Guardian"
        sloganSource="The breaking news is here."
        articles={favorites.theGuardian}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
};

export default Favorites;
