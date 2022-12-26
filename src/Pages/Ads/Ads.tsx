// React
import React, { useEffect, useState } from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
import AdCard from "../../Components/AdCard/AdCard";
import {
  adsDataFetchStatus,
  adType,
  vehicleType,
} from "../../Models/customTypes";
import VehicleSelector from "../../Components/VehicleSelector/VehicleSelector";
import PendingAnimation from "../../Components/PendingAnimation/PendingAnimation";
import AdTypeSelector from "../../Components/AdTypeSelector/AdTypeSelector";
import { phoneInAdsPageIng } from "../../Images";
// React
// CSS
import styles from "./Ads.module.css";
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
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  useEffect(() => {
    // For updating ScrollIndicator
    window.addEventListener("scroll", (): void => {
      const percentage =
        (window.scrollY /
          (window.document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollPercentage(Math.round(percentage));
    });
    // For updating ScrollIndicator

    return window.removeEventListener("scroll", () => {});
  });
  useEffect(() => {
    const h1El = document.getElementById("h1");
    const backBtn = document.getElementById("backBtn");
    const rect = h1El?.getBoundingClientRect();
    if (rect?.top === 0) {
      h1El?.classList.add("justify-between");
      h1El?.classList.add(styles.active);
      h1El?.classList.add("px-5");
      backBtn?.classList.add("opacity-100");
      return;
    } else {
      h1El?.classList.remove("justify-between");
      backBtn?.classList.remove("opacity-100");
      h1El?.classList.remove(styles.active);
    }
  }, [scrollPercentage]);

  return (
    <div className="flex flex-col items-center justify-start w-full px-5 h-max relative">
      <img src={phoneInAdsPageIng} alt="" />
      <h1
        className="flex flex-row-reverse justify-center items-center sticky top-0 z-20 w-screen h-20"
        id="h1"
      >
        <span>لیست تبلیغات</span>

        <span id="backBtn" className="opacity-0">
          &lt;
        </span>
      </h1>
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
      {adsDataFetchStatus === "Pending" && <PendingAnimation />}
      <AdTypeSelector selectedAd={selectedAd} setSelectedAd={setSelectedAd} />
    </div>
  );
};

export default Ads;
