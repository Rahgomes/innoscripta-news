import { Link } from "react-router-dom";
import { MAIN_MENU } from "../../lib/constants";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          {MAIN_MENU.map((menuItem) => (
            <li className="flex" key={menuItem.id}>
              <Link to={menuItem.link} className="flex items-center px-4 -mb-1">
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
