// Services
import { postManageFavoriteAds } from "./../Services/postManageFavoriteAds";
// Services
// Models
import { I_Advertise } from "../Models/advertiseInterface";
// Models
// Modules
import Swal from "sweetalert2";
import { toast } from "react-toastify";
// Modules

export const manageFavorites = async (
  adId: number | string,
  setAds: React.Dispatch<React.SetStateAction<I_Advertise[]>>,
  ads: I_Advertise[]
) => {
  const copyAds = [...ads];
  const copyAds2 = [...ads];
  const selectedAd = copyAds.findIndex((item) => item.advertise_id === adId);
  copyAds[selectedAd].favourite = !copyAds[selectedAd].favourite;
  setAds(copyAds);
  await postManageFavoriteAds(adId).then((res) => {
    if (res) {
      toast.success("Done !", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      Swal.fire({
        icon: "error",
        title: "هنگام ارتباط با سرور مشکلی رخ داد",
      }).then(() => {
        copyAds[selectedAd].favourite = !copyAds[selectedAd].favourite;
        return setAds(copyAds2);
      });
    }
  });
};
