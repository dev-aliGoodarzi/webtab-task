import { vehicleType, adType } from "./../Models/customTypes";
// Models
import { I_Advertise } from "../Models/advertiseInterface";
import { axiosInstance } from "../util/axiosInstance";
import Swal from "sweetalert2";
// Models
export const getAllAdsService = async (
  vehicleType: vehicleType,
  adType: adType
): Promise<I_Advertise[]> => {
  return axiosInstance
    .get(`/get-advertises/${vehicleType}/type/${adType}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: err.message,
      });
      return [];
    });
};
