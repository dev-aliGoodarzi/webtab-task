// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
// React
// CSS
import styles from "./AdCard.module.css";
// CSS
// Modules
// Modules
// Icons
import { IoIosArrowBack } from "react-icons/io";
import { usePersianNumbers } from "../../Hooks/usePersianNumbers";
import { Link } from "react-router-dom";
// Icons

type AdCardProps = {
  data: I_Advertise;
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
}) => {
  return (
    <Link
      to={`${advertise_id}/${advertise_type_id}`}
      className={`w-11/12 h-30 flex flex-row relative first-of-type:mt-5 mt-10 box-border rounded-lg  ${styles.adCard}`}
    >
      <img
        src={image}
        alt=""
        className="absolute z-0 left-0 h-full w-full rounded-lg "
      />
      <div
        className={`w-full h-full absolute top-0 left-0 rounded-lg flex flex-row-reverse items-center justify-between px-3 ${styles.contents}`}
      >
        <IoIosArrowBack />
        <div
          className={`flex flex-col items-start justify-start ${styles.data}`}
        >
          <p>{description}</p>
          <p>{address}</p>
          <p>{usePersianNumbers(phone)}</p>
        </div>
      </div>
    </Link>
  );
};

export default AdCard;
