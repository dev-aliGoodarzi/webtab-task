import { IconType } from "react-icons/lib";
import { JsxElement } from "typescript";
// Models
import { adType } from "./customTypes";
import { vehicleType } from "./customTypes";
// Models

export interface I_vehicles {
  id: string;
  title: string;
  icon: JSX.Element;
  onCLick: Function;
  thisVehcileType: vehicleType;
}

export interface I_adType {
  id: string;
  title: string;
  icon: any;
  onCLick: Function;
  adType: adType;
}
