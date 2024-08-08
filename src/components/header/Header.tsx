import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

import { setSearchKeyword } from "../../redux/slices/searchFilterSlice";
import Sidebar from "../menu/sidebar/Sidebar";
import MainMenu from "../menu/main/MainMenu";
import * as TYPES from "../../lib/types";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TYPES.AppDispatch>();

  const [showSidebar, setShowSidebar] = useState("hidden");

  const showMobileMenu = () => setShowSidebar("");
  const closeMobileMenu = () => setShowSidebar("hidden");

  const { searchKeyword } = useSelector(
    (state: TYPES.RootState) => state.filter
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  return (
    <header className="p-4 bg-white">
      <nav className="relative px-4 py-4 flex justify-between items-center ">
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={showMobileMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <MainMenu isFooter={false} />

        <div className="flex items-center md:space-x-4">
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
          </div>
          <button
            type="button"
            className="mx-2 px-6 py-2 font-semibold rounded bg-slate-50 disabled:opacity-50"
            onClick={() => navigate("/search")}
            disabled={!searchKeyword}
          >
            <IoIosSearch />
          </button>

          <button
            type="button"
            className="mx-2 px-6 py-2 font-semibold rounded bg-slate-50"
            onClick={() => navigate("/favorites")}
          >
            <FiUser />
          </button>
        </div>
      </nav>

      <Sidebar showSidebar={showSidebar} closeMobileMenu={closeMobileMenu} />
    </header>
  );
};

export default Header;
