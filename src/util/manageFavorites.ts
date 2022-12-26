import { adType, vehicleType } from "./../Models/customTypes";
import { postManageFavoriteAds } from "./../Services/postManageFavoriteAds";
import React from "react";
import { I_Advertise } from "../Models/advertiseInterface";
import Swal from "sweetalert2";
import { adsDataFetchStatus } from "../Models/customTypes";
import { getAdsByVehicleTypeAndAdType } from "./getAdsByVehicleTypeAndAdType";

export const manageFavorites = async (
  adId: number | string,
  setAds: React.Dispatch<React.SetStateAction<I_Advertise[]>>,
  setFetchStatus: React.Dispatch<React.SetStateAction<adsDataFetchStatus>>,
  vehicleType: vehicleType,
  adType: adType
) => {
  setFetchStatus("Pending");
  const res = await postManageFavoriteAds(adId);
  if (res === false) {
    setFetchStatus("Error");
    return Swal.fire({
      icon: "error",
      title: "در زمان به روزرسانی مشکلی رخ داد",
    });
  } else {
    await getAdsByVehicleTypeAndAdType(
      vehicleType,
      adType,
      setAds,
      setFetchStatus
    );
    await Swal.fire({ icon: "success", title: "عملیات انجام شد" }).then(
      () => {}
    );
  }
};
