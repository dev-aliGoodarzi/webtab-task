import { axiosInstance } from "../util/axiosInstance";

export const postManageFavoriteAds = async (
  advertiseId: string | number
): Promise<boolean> => {
  return axiosInstance
    .post("/set-ads-favourite", {
      advertise_id: advertiseId,
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
