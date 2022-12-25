import { getSingleAdService } from "./../Services/getSingleAdService";
import { adType } from "./../Models/customTypes";
import { I_Advertise } from "./../Models/advertiseInterface";
export const getSingleAd = async (
  adId: adType = 1,
  cb: React.Dispatch<React.SetStateAction<I_Advertise>>
): Promise<I_Advertise> => {
  const selectedAd = await getSingleAdService(adId);
  cb(selectedAd);
  return selectedAd;
};
