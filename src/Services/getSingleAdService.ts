// Models
import { adType } from "./../Models/customTypes";
import { I_Advertise } from "./../Models/advertiseInterface";
// Models
// Modules
import { axiosInstance } from "../util/axiosInstance";
import Swal from "sweetalert2";
// Modules

export const getSingleAdService = async (
  adId: adType
): Promise<I_Advertise> => {
  return axiosInstance
    .get(`/get-advertise/${adId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "",
      }).then(() => {
        return {
          address: "",
          advertise_id: 0,
          advertise_type_id: 0,
          AdvertiseSocialMedias: [],
          description: "",
          duration: 0,
          favourite: false,
          image: "",
          lat_lon: "",
          AdvertiseGalleries: [],
          discount_code: "",
          phone: "",
          discount_value: "",
        };
      });
    });
};
