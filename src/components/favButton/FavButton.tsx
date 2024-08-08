import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import * as TYPES from "../../lib/types";

const FavButton = ({ onClick, isFavorite }: TYPES.FavButtonProps) => {
  return (
    <>
      {isFavorite && (
        <button className="flex items-center cursor-pointer" onClick={onClick}>
          <IoMdStar className="size-6 text-yellow-500" />{" "}
          <span>Remove from Favorites</span>
        </button>
      )}

      {!isFavorite && (
        <button className="flex items-center cursor-pointer" onClick={onClick}>
          <IoMdStarOutline className="size-6 text-yellow-500" />{" "}
          <span>Add to Favorites</span>
        </button>
      )}
    </>
  );
};

export default FavButton;
