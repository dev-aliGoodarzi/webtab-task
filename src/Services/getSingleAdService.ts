// Models
import { adType } from "./../Models/customTypes";
import { I_Advertise } from "./../Models/advertiseInterface";
// Models
// Modules
import { axiosInstance } from "../util/axiosInstance";
// Modules

export const getSingleAdService = async (
  adId: adType
): Promise<I_Advertise> => {
  return axiosInstance.get(`/get-advertise/${adId}`).then((res) => {
    return res.data;
  });
};
