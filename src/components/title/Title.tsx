import { TitleProps } from "../../lib/types";

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="flex flex-row flex-nowrap items-center py-10">
      <span
        className="flex-grow block border-t border-black"
        aria-hidden="true"
        role="presentation"
      ></span>
      <span className="flex-none block mx-4  px-4 py-2.5 leading-none font-medium uppercase bg-black text-white text-xl">
        {title}
      </span>
      <span
        className="flex-grow block border-t border-black"
        aria-hidden="true"
        role="presentation"
      ></span>
    </h1>
  );
};

export default Title;
