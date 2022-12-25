// React
import React, { useState, useEffect } from "react";
// React
// Components
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import { I_Advertise } from "./Models/advertiseInterface";
import { getAdsByVehicleTypeAndAdType } from "./util/getAdsByVehicleTypeAndAdType";
import { adsDataFetchStatus } from "./Models/customTypes";
import Ads from "./Pages/Ads/Ads";
import Ad from "./Components/Ad/Ad";
// Components
// Models
// Models
// Modules
// Modules

const App = () => {
  const [ads, setAds] = useState<I_Advertise[]>([]);
  const [adsDataFetchStatus, setAdsDataFetchStatus] =
    useState<adsDataFetchStatus>("Pending");
  useEffect(() => {
    if (adsDataFetchStatus === "Pending") {
      getAdsByVehicleTypeAndAdType(1, 1, setAds, setAdsDataFetchStatus);
      return;
    } else {
      return;
    }
  }, [adsDataFetchStatus]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ad"
          element={
            <Ads
              ads={ads}
              adsDataFetchStatus={adsDataFetchStatus}
              setAdsDataFetchStatus={setAdsDataFetchStatus}
            />
          }
        />{" "}
        <Route path="/ad/:adId" element={<Ad />} />
      </Routes>
    </>
  );
};

export default App;
