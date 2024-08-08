import { useSelector } from "react-redux";
import { RootState, SearchFilterProps } from "../../lib/types";

const SearchFilter = ({
  handleSearchChange,
  handleCategoryChange,
  handleStartDateChange,
  handleEndDateChange,
  handleSourceChange,
}: SearchFilterProps) => {
  const { searchKeyword, selectedCategory, startDate, endDate, source } =
    useSelector((state: RootState) => state.filter);

  return (
    <>
      <div className="bg-gray-50 p-4 mb-5">
        <div className="relative mb-5">
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
            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
            value={searchKeyword}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex justify-between flex-wrap">
          <div className="mb-5">
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="sport">Sport</option>
              <option value="business">Business</option>
              <option value="international">International</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="startDate">Start Date: </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="endDate">End Date: </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>

          <div className="mb-5">
            <select value={source} onChange={handleSourceChange}>
              <option value="">Select a source</option>
              <option value="newsOpenApi">News Open API</option>
              <option value="newYorkTimes">New York Times</option>
              <option value="theGuardian">The Guardian</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 mb-5">
        <h2 className="mb-4 text-2xl leading-none tracking-tight text-gray-900">
          Keyword searched: <strong>{searchKeyword}</strong>
        </h2>
        <div className="flex justify-between flex-wrap">
          <h3 className="text-xl leading-none tracking-tight text-gray-900 mb-5">
            Data:{" "}
            <strong>
              {startDate} / {endDate}
            </strong>
          </h3>
          <h3 className="text-xl leading-none tracking-tight text-gray-900 mb-5">
            Category: <strong>{selectedCategory}</strong>
          </h3>
          <h3 className="text-xl leading-none tracking-tight text-gray-900 mb-5">
            Source: <strong>{source}</strong>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
