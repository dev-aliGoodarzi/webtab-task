// React
import React, { useEffect, useState } from "react";
// React
// CSS
// CSS
// Models
import { I_Advertise } from "../../Models/advertiseInterface";
// Models
// Moduels
import { useParams } from "react-router-dom";
import { getSingleAd } from "../../util/getSingleAd";
// Moduels

const Ad = () => {
  const [selectedAdData, setSelectedAdData] = useState<I_Advertise>({
    address: "",
    advertise_id: 0,
    advertise_type_id: 0,
    AdvertiseSocialMedias: [],
    description: "",
    duration: 0,
    favourite: false,
    image: "",
    lat_lon: "",
    AdvertiseGalleries: [],
    discount_code: "",
    phone: "",
    discount_value: "",
  });
  const { adId: selectedAd, adId2 } = useParams();
  useEffect(() => {
    getSingleAd(adId2, setSelectedAdData);
    console.log(`selectedAd : `, selectedAd);
  }, [adId2]);
  return <div>{selectedAdData.address}</div>;
};

export default Ad;
