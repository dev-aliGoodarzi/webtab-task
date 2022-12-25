// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
import AdCard from "../../Components/AdCard/AdCard";
import { adsDataFetchStatus } from "../../Models/customTypes";
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
};

const Ads: React.FunctionComponent<AdsProps> = ({
  ads,
  adsDataFetchStatus,
  setAdsDataFetchStatus,
}) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-max">
      <h1>ad Page</h1>
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
