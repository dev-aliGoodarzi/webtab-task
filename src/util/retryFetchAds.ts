// Models
import { adsDataFetchStatus } from "./../Models/customTypes";
// Models

export const retryFetchAds = (
  setFetchStatus: React.Dispatch<React.SetStateAction<adsDataFetchStatus>>
) => {
  setFetchStatus("Pending");
};
