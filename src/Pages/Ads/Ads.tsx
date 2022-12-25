// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
import AdCard from "../../Components/AdCard/AdCard";
import {
  adsDataFetchStatus,
  adType,
  vehicleType,
} from "../../Models/customTypes";
import VehicleSelector from "../../Components/VehicleSelector/VehicleSelector";
// React
// CSS
// CSS
// Modules
// Modules

type AdsProps = {
  ads: I_Advertise[];
  adsDataFetchStatus: adsDataFetchStatus;
  setAdsDataFetchStatus: React.Dispatch<
    React.SetStateAction<adsDataFetchStatus>
  >;
  selectedVehicle: vehicleType;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType>>;
  selectedAd: adType;
  setSelectedAd: React.Dispatch<React.SetStateAction<adType>>;
};

const Ads: React.FunctionComponent<AdsProps> = ({
  ads,
  adsDataFetchStatus,
  setAdsDataFetchStatus,
  selectedAd,
  selectedVehicle,
  setSelectedAd,
  setSelectedVehicle,
}) => {
  return (
    <div className="flex flex-col items-center justify-start w-full px-5 h-max">
      <VehicleSelector
        setSelectedVehicle={setSelectedVehicle}
        selectedVehicle={selectedVehicle}
      />
      {adsDataFetchStatus === "Done" && (
        <>
          {ads.map((item) => (
            <AdCard data={item} key={item.advertise_id} />
          ))}
        </>
      )}
      {adsDataFetchStatus === "Error" && (
        <>
          <h1>Error !</h1>
          <button
            onClick={() => {
              setAdsDataFetchStatus("Pending");
            }}
          >
            retry
          </button>
        </>
      )}
      {adsDataFetchStatus === "Pending" && <h1>Pending Bro :/ !</h1>}
    </div>
  );
};

export default Ads;
