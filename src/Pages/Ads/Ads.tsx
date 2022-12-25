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
};

const Ads: React.FunctionComponent<AdsProps> = ({
  ads,
  adsDataFetchStatus,
}) => {
  return (
    <div>
      {ads.map((item) => (
        <AdCard data={item} />
      ))}
    </div>
  );
};

export default Ads;
