// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
// React
// CSS
import styles from "./AdCard.module.css";
import "react-toastify/dist/ReactToastify.css";
// CSS
// Modules
// Modules
// Icons
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { manageFavorites } from "../../util/manageFavorites";
import LikeBtn from "../../util/LikeBtn/LikeBtn";
// Icons

type AdCardProps = {
  data: I_Advertise;
  setAds: React.Dispatch<React.SetStateAction<I_Advertise[]>>;
  ads: I_Advertise[];
};

const AdCard: React.FunctionComponent<AdCardProps> = ({
  data: {
    AdvertiseSocialMedias,
    address,
    advertise_id,
    advertise_type_id,
    description,
    duration,
    favourite,
    image,
    lat_lon,
    phone,
    AdvertiseGalleries,
    discount_code,
    discount_value,
  },
  setAds,
  ads,
}) => {
  return (
    <>
      <div
        className={`w-full h-30 flex flex-row relative first-of-type:mt-5 mt-10 box-border rounded-lg last-of-type:mb-24 ${styles.adCard}`}
      >
        <img
          src={image}
          alt=""
          className="absolute z-0 left-0 h-full w-full rounded-lg "
        />
        <div
          className={`w-full h-full absolute top-0 left-0 rounded-lg flex flex-row-reverse items-center justify-between pr-3 ${styles.contents}`}
        >
          <Link
            to={`${advertise_id}/${advertise_type_id}`}
            className="h-full w-1/12 flex items-center justify-center"
          >
            <IoIosArrowBack />
          </Link>
          <div
            className={`flex flex-col items-start justify-start ${styles.data}`}
          >
            <p>{description}</p>
            <p>{address}</p>
            <p>{phone}</p>
            <div className="mt-4 relative z-10">
              <LikeBtn
                favourite={favourite}
                manageFavorites={() =>
                  manageFavorites(advertise_id, setAds, ads)
                }
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdCard;
