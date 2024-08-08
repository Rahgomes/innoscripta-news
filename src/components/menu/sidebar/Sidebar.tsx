import { Link } from "react-router-dom";

import * as CONSTS from "../../../lib/constants";
import * as TYPES from "../../../lib/types";

const Sidebar = ({ showSidebar, closeMobileMenu }: TYPES.SidebarProps) => {
  return (
    <div className={`navbar-menu relative z-50 ${showSidebar}`}>
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <button className="navbar-close" onClick={closeMobileMenu}>
            <svg
              className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div>
          <ul>
            {CONSTS.MAIN_MENU.map((menuItem) => (
              <li className="mb-1">
                <Link
                  to={menuItem.link}
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  onClick={closeMobileMenu}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
