import { NewsCategorySectionProps } from "../../lib/types";
import FavButton from "../favButton";

const NewsCategorySection = ({
  titleSource,
  sloganSource,
  articles,
  onClick,
  isFavorite,
}: NewsCategorySectionProps) => {
  return (
    <section className="py-6 sm:py-12  text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">{titleSource}</h2>
          <p className="font-serif text-sm text-gray-600">{sloganSource}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article className="flex flex-col bg-gray-50" key={article.id}>
              {article.urlToImage && (
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
                    className="object-cover w-full h-52 bg-gray-500"
                    src={article.urlToImage}
                  />
                </a>
              )}

              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href={article.url}
                  target="_blank"
                  title={article.title}
                  className="text-blue-600 visited:text-purple-600"
                >
                  <h3 className="flex-1 mb-5 text-md font-semibold leading-snug line-clamp-2 tracking-wider uppercase hover:underline text-violet-600">
                    {article.title}
                  </h3>
                </a>
                <p className="flex-1 text-sm leading-snug line-clamp-3">
                  {article.description}
                </p>

                <a
                  rel="noopener noreferrer"
                  href={article.url}
                  target="_blank"
                  title={article.title}
                  className="mt-5 text-blue-600 visited:text-purple-600"
                >
                  <p className="flex-1 text-sm leading-snug">Read more</p>
                </a>

                <div className="flex flex-wrap items-center mt-8 space-x-2 text-xs text-gray-600">
                  <img
                    alt={article.author}
                    title={article.author}
                    className="self-center flex-shrink-0 w-8 h-8 bg-center bg-cover rounded-full bg-gray-500"
                    src={`https://ui-avatars.com/api/?name=${article.author}`}
                  />
                  <p className="text-lg font-semibold leading-tight">
                    {article.author}
                  </p>
                </div>

                <FavButton
                  onClick={() =>
                    onClick(article.sourceCategory as any, article)
                  }
                  isFavorite={isFavorite(
                    article.sourceCategory as any,
                    article
                  )}
                />
              </div>
            </article>
          ))}
        </div>
        {!articles.length && (
          <p className="flex justify-center w-full">
            There are no articles available.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsCategorySection;
