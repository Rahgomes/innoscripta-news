import { Link } from "react-router-dom";
import * as CONSTS from "../../../lib/constants";
import * as TYPES from "../../../lib/types";

const MainMenu = ({ isFooter }: TYPES.MainMenuProps) => {
  return (
    <ul
      className={`${!isFooter && "hidden"} lg:flex lg:items-center lg:space-x-6`}
    >
      {CONSTS.MAIN_MENU.map((menuItem, index) => (
        <>
          <li className="flex" key={menuItem.id}>
            <Link
              to={menuItem.link}
              className="text-gray-400 hover:text-gray-500"
            >
              {menuItem.title}
            </Link>
          </li>
          {index < CONSTS.MAIN_MENU.length - 1 && (
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default MainMenu;
