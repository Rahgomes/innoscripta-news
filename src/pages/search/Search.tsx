import Title from "../../components/title";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  AppDispatch,
  NewsCategory,
  NormalizedArticle,
} from "../../lib/types";
import {
  setSearchKeyword,
  setSelectedCategory,
  setStartDate,
  setEndDate,
  setSource,
} from "../../redux/slices/searchFilterSlice";
import NewsSourceSection from "../../components/newsSourceSection";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { useEffect } from "react";
import { fetchNewsFromNYT } from "../../redux/slices/nytApiSlice";
import { fetchNewsFromNAOrg } from "../../redux/slices/naoApiSlice";
import { fetchNewsFromTGA } from "../../redux/slices/tgaApiSlice";
import SearchFilter from "../../components/searchFilter";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchKeyword, selectedCategory, startDate, endDate, source } =
    useSelector((state: RootState) => state.filter);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartDate(e.target.value));
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEndDate(e.target.value));
  };

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSource(e.target.value));
  };

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
    if (!source || source === "newYorkTimes") {
      dispatch(
        fetchNewsFromNYT({
          keyword: searchKeyword,
          category: selectedCategory,
          rangeDate: { startDate, endDate },
        })
      );
    }

    if (!source || source === "newsOpenApi") {
      dispatch(
        fetchNewsFromNAOrg({
          keyword: searchKeyword,
          category: selectedCategory,
          rangeDate: { startDate, endDate },
        })
      );
    }

    if (!source || source === "theGuardian") {
      dispatch(
        fetchNewsFromTGA({
          keyword: searchKeyword,
          category: selectedCategory,
          rangeDate: { startDate, endDate },
        })
      );
    }
  }, [dispatch, searchKeyword, selectedCategory, startDate, endDate, source]);

  return (
    <>
      <Title title="Search" />

      <div className="container mx-auto px-4">
        <SearchFilter
          handleSearchChange={handleSearchChange}
          handleCategoryChange={handleCategoryChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleSourceChange={handleSourceChange}
        />

        {!source ||
          (source === "newYorkTimes" && (
            <NewsSourceSection
              titleSource="News from New York Times"
              sloganSource="All the News That's Fit to Print."
              articles={nytApi.articles.slice(0, 12)}
              onClick={handleToggleFavorite}
              isFavorite={isFavorite}
            />
          ))}

        {!source ||
          (source === "newsOpenApi" && (
            <NewsSourceSection
              titleSource="News from News Org"
              sloganSource="Search worldwide news."
              articles={naoApi.articles.slice(0, 12)}
              onClick={handleToggleFavorite}
              isFavorite={isFavorite}
            />
          ))}

        {!source ||
          (source === "theGuardian" && (
            <NewsSourceSection
              titleSource="News from The Guardian"
              sloganSource="The breaking news is here."
              articles={tgaApi.articles.slice(0, 12)}
              onClick={handleToggleFavorite}
              isFavorite={isFavorite}
            />
          ))}
      </div>
    </>
  );
};

export default Search;
