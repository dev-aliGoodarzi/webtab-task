// Models
import { vehicleType } from "./customTypes";
// Models

export interface I_vehicles {
  id: string;
  title: string;
  icon: any;
  onCLick: Function;
  thisVehcileType: vehicleType;
}
