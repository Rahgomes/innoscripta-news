import { IoIosSearch } from "react-icons/io";
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
  resetFilters,
} from "../../redux/slices/searchFilterSlice";
import NewsSourceSection from "../../components/newsSourceSection";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { useEffect } from "react";
import { fetchNewsFromNYT } from "../../redux/slices/nytApiSlice";
import { fetchNewsFromNAOrg } from "../../redux/slices/naoApiSlice";
import { fetchNewsFromTGA } from "../../redux/slices/tgaApiSlice";

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
    dispatch(
      fetchNewsFromNYT({
        keyword: searchKeyword,
        category: selectedCategory,
        rangeDate: { startDate, endDate },
      })
    );
    dispatch(
      fetchNewsFromNAOrg({
        keyword: searchKeyword,
        category: selectedCategory,
        rangeDate: { startDate, endDate },
      })
    );
    dispatch(
      fetchNewsFromTGA({
        keyword: searchKeyword,
        category: selectedCategory,
        rangeDate: { startDate, endDate },
      })
    );

    () => resetFilters();
  }, [dispatch, searchKeyword, selectedCategory, startDate, endDate, source]);

  return (
    <>
      <Title title="Search" />

      <div className="container mx-auto px-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
          {/* <button
            type="button"
            className="hidden px-6 py-2 font-semibold rounded lg:block bg-slate-50"
            onClick={() => navigate("/search")}
          >
            <IoIosSearch />
          </button> */}
        </div>

        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="sport">Sport</option>
          <option value="business">Business</option>
          <option value="international">International</option>
        </select>

        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <input type="date" value={endDate} onChange={handleEndDateChange} />

        <select value={source} onChange={handleSourceChange}>
          <option value="newsOpenApi">News Open API</option>
          <option value="newYorkTimes">New York Times</option>
          <option value="theGuardian">The Guardian</option>
        </select>

        <h2 className="mb-4 text-2xl leading-none tracking-tight text-gray-900">
          Keyword searched: {searchKeyword}
        </h2>
        <h3>
          Data: {startDate} / {endDate}
        </h3>
        <h3>Category: {selectedCategory}</h3>
        <h3>Source: {source}</h3>

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
