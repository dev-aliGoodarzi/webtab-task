import { I_Advertise } from "./../Models/advertiseInterface";
import { getAllAdsService } from "./../Services/getAllAdsService";

export const getAdsByVehicleTypeAndAdType = async (
  vehicleType: number | string = 1,
  adType: number | string = 1,
  cb: React.Dispatch<React.SetStateAction<I_Advertise[] | string>>
): Promise<I_Advertise[] | string> => {
  const selectedAds = await getAllAdsService(vehicleType, adType);
  cb(selectedAds);
  return selectedAds;
};
