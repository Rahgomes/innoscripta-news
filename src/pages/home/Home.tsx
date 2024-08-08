import { useEffect } from "react";
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
import { formatDate } from "../../lib/utils";
import FavButton from "../../components/favButton";
import NewsSourceSection from "../../components/newsSourceSection";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nytApi = useSelector((state: RootState) => state.nytApi);
  const naoApi = useSelector((state: RootState) => state.naoApi);
  const tgaApi = useSelector((state: RootState) => state.tgaApi);

  const newsOrgTopNews = [...naoApi.articles].reverse();

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
    dispatch(fetchNewsFromNYT());
    dispatch(fetchNewsFromNAOrg());
    dispatch(fetchNewsFromTGA());
  }, [dispatch]);
  return (
    <>
      <div className=" text-gray-900">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col col-span-12 p-6 divide-y lg:p-10 divide-gray-300">
            <div className="pt-6 pb-4 space-y-2 bg-gray-100">
              {newsOrgTopNews.slice(0, 3).map((article) => (
                <article className="bg-gray-50 p-6">
                  <a
                    rel="noopener noreferrer"
                    href={article.url}
                    aria-label={article.title}
                    target="_blank"
                    title={article.title}
                  >
                    <img
                      alt={article.title}
                      title={article.title}
                      className="object-contain w-full h-120 bg-gray-500 mb-4"
                      src={article.urlToImage}
                    />
                  </a>
                  <span className="font-bold">
                    {formatDate(article.publishedAt)}
                  </span>
                  <h1 className="text-4xl font-bold mt-4">{article.title}</h1>
                  <p className="mt-4">{article.description}</p>
                  <a
                    rel="noopener noreferrer"
                    href={article.url}
                    aria-label={article.title}
                    target="_blank"
                    className="inline-flex items-center py-2 my-4 space-x-2 text-sm text-violet-600"
                  >
                    <span>Read more</span>
                  </a>
                  <FavButton
                    onClick={() => handleToggleFavorite("newsOpenApi", article)}
                    isFavorite={isFavorite("newsOpenApi", article)}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NewsSourceSection
        titleSource="News from New York Times"
        sloganSource="All the News That's Fit to Print."
        articles={nytApi.articles.slice(0, 4)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from News Org"
        sloganSource="Search worldwide news."
        articles={naoApi.articles.slice(0, 4)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />

      <NewsSourceSection
        titleSource="News from The Guardian"
        sloganSource="The breaking news is here."
        articles={tgaApi.articles.slice(0, 4)}
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
};

export default Home;
