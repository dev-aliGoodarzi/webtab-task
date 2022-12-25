// Models
import {
  vehicleType,
  adType,
  adsDataFetchStatus,
} from "./../Models/customTypes";
import { I_Advertise } from "./../Models/advertiseInterface";
// Models
// Services
import { getAllAdsService } from "./../Services/getAllAdsService";
// Services

export const getAdsByVehicleTypeAndAdType = async (
  vehicleType: vehicleType = 1,
  adType: adType = 1,
  setAds: React.Dispatch<React.SetStateAction<I_Advertise[]>>,
  setFetchStatus: React.Dispatch<React.SetStateAction<adsDataFetchStatus>>
): Promise<I_Advertise[]> => {
  const selectedAds = await getAllAdsService(vehicleType, adType);
  if (selectedAds[0] === undefined) {
    setFetchStatus("Error");
    return [];
  }
  setAds(selectedAds);
  setFetchStatus("Done");
  return selectedAds;
};
