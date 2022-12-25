// React
import React, { useState, useEffect } from "react";
// React
// Components
import Home from "./Containers/Home/Home";
import Ads from "./Pages/Ads/Ads";
import Ad from "./Components/Ad/Ad";
// Components
// Models
import { adsDataFetchStatus } from "./Models/customTypes";
import { I_Advertise } from "./Models/advertiseInterface";
// Models
// Modules
import { Routes, Route } from "react-router-dom";
import { getAdsByVehicleTypeAndAdType } from "./util/getAdsByVehicleTypeAndAdType";
// Modules

const App = () => {
  //***********************************STATES***************************************** */
  const [ads, setAds] = useState<I_Advertise[]>([]);
  const [adsDataFetchStatus, setAdsDataFetchStatus] =
    useState<adsDataFetchStatus>("Pending");

  //***********************************STATES***************************************** */
  //********************************************************************************** */
  //********************************************************************************** */
  //***********************************SideEffect Manage****************************** */
  // for getting datas @ first render !
  useEffect(() => {
    if (adsDataFetchStatus === "Pending") {
      getAdsByVehicleTypeAndAdType(1, 1, setAds, setAdsDataFetchStatus);
      return;
    } else {
      return;
    }
  }, [adsDataFetchStatus]);
  return (
    //***********************************SideEffect Manage****************************** */
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
        <Route path="/ad/:adId/:adId2" element={<Ad />} />
      </Routes>
    </>
  );
};

export default App;
