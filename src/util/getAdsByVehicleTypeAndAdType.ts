import { vehicleType, adType } from "./../Models/customTypes";
import { I_Advertise } from "./../Models/advertiseInterface";
import { getAllAdsService } from "./../Services/getAllAdsService";

export const getAdsByVehicleTypeAndAdType = async (
  vehicleType: vehicleType = 1,
  adType: adType = 1,
  cb: React.Dispatch<React.SetStateAction<I_Advertise[]>>
): Promise<I_Advertise[]> => {
  const selectedAds = await getAllAdsService(vehicleType, adType);
  cb(selectedAds);
  return selectedAds;
};
