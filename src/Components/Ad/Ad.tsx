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
import { adsDataFetchStatus } from "../../Models/customTypes";
import BackBtn from "../../util/BackBtn/BackBtn";
import PendingAnimation from "../PendingAnimation/PendingAnimation";
// Moduels

const Ad = () => {
  const [selectedAdData, setFetchStatus] = useState<I_Advertise>({
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
  const [fetchStatus, setIsPending] = useState<adsDataFetchStatus>("Pending");
  const { adId: selectedAd, adId2 } = useParams();
  useEffect(() => {
    getSingleAd(adId2, setFetchStatus)
      .then(() => {
        setIsPending("Done");
      })
      .catch(() => {
        setIsPending("Error");
      });
  }, [selectedAd, adId2, fetchStatus]);
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {fetchStatus === "Pending" && <PendingAnimation />}
      {fetchStatus === "Error" && <>Error In Fetch !</>}
      {fetchStatus === "Done" && (
        <div className="flex flex-col items-end box-border ">
          <img src={selectedAdData.image} alt="" className="w-full h-64" />
          <div className="flex flex-col items-end mt-3 px-4">
            <p>{selectedAdData.address}</p>
            <br />
            <p>{selectedAdData.description}</p>
            <br />
            <p>
              {selectedAdData.lat_lon.split(",").map((item, index) => (
                <span key={item}>
                  {index === 0 ? (
                    <>lat : {item}</>
                  ) : (
                    <>
                      <br />
                      lon : {item}
                    </>
                  )}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
      <BackBtn />
    </div>
  );
};

export default Ad;
