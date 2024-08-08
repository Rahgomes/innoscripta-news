import MainMenu from "../menu/main/MainMenu";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
        <MainMenu isFooter />
      </div>
    </footer>
  );
};

export default Footer;
