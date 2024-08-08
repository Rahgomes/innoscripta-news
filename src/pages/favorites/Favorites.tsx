import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import NewsSourceSection from "../../components/newsSourceSection";
import Title from "../../components/title";
import * as TYPES from "../../lib/types";

const Favorites = () => {
  const dispatch = useDispatch<TYPES.AppDispatch>();
  const favorites = useSelector((state: TYPES.RootState) => state.favorites);

  const handleToggleFavorite = (
    category: TYPES.NewsCategory,
    article: TYPES.NormalizedArticle
  ) => {
    dispatch(toggleFavorite({ category, article }));
  };

  const isFavorite = (
    category: TYPES.NewsCategory,
    article: TYPES.NormalizedArticle
  ) => {
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
