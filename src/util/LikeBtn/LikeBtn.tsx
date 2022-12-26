// React
import React from "react";
// React
// Icons
import { FcLike } from "react-icons/fc";
// Icons

type LikeBtnProps = {
  favourite: boolean;
  manageFavorites: any;
};

const LikeBtn: React.FunctionComponent<LikeBtnProps> = ({
  favourite,
  manageFavorites,
}) => {
  return (
    <FcLike
      fillOpacity={favourite ? "1" : 0.5}
      fill="red"
      onClick={(e) => {
        e.stopPropagation();
        manageFavorites();
      }}
    />
  );
};

export default LikeBtn;
