// React
import React, { useState, useEffect } from "react";
// React
// Components
import Home from "./Containers/Home/Home";
import Ads from "./Pages/Ads/Ads";
import Ad from "./Components/Ad/Ad";
// Components
// Models
import { adsDataFetchStatus, adType, vehicleType } from "./Models/customTypes";
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
  const [selectedVehicle, setSelectedVehicle] = useState<vehicleType>(1);
  const [selectedAd, setSelectedAd] = useState<adType>(1);
  //***********************************STATES***************************************** */
  //********************************************************************************** */
  //***********************************SideEffect Manage****************************** */
  // for getting datas @ first render (+) retry If Fail The Opration !
  useEffect(() => {
    setAdsDataFetchStatus("Pending");
  }, [selectedAd, selectedVehicle]);
  useEffect(() => {
    if (adsDataFetchStatus === "Pending") {
      setAds([]);
      getAdsByVehicleTypeAndAdType(
        selectedVehicle,
        selectedAd,
        setAds,
        setAdsDataFetchStatus
      );
      return;
    } else {
      return;
    }
  }, [adsDataFetchStatus, selectedAd, selectedVehicle]);
  return (
    //***********************************SideEffect Manage****************************** */
    //********************************************************************************** */
    <>
      test
      {window.innerWidth > 600 ? (
        <> SO BIG DEVICE -- This App Will Render In {"<"} 600px </>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ads"
            element={
              <Ads
                ads={ads}
                adsDataFetchStatus={adsDataFetchStatus}
                setAdsDataFetchStatus={setAdsDataFetchStatus}
                selectedVehicle={selectedVehicle}
                setSelectedVehicle={setSelectedVehicle}
                selectedAd={selectedAd}
                setSelectedAd={setSelectedAd}
                setAds={setAds}
              />
            }
          />
          <Route path="/ads/:adId/:adId2" element={<Ad />} />
        </Routes>
      )}
    </>
  );
};

export default App;
