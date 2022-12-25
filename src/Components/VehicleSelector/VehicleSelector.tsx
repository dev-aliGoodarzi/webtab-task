// React
import React from "react";
import { vehicleType } from "../../Models/customTypes";
// React
// CSS
import styles from "./VehicleSelector.module.css";
// CSS
// Modules
import { FaTaxi, FaBus, FaTrain } from "react-icons/fa";
import SelectorBtn from "../../util/SelectorBtn/SelectorBtn";
import { I_vehicles } from "../../Models/customInterfaces";
// Modules
// Models
// Models

type VehicleSelectorProps = {
  selectedVehicle: vehicleType;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<vehicleType>>;
};

const VehicleSelector: React.FunctionComponent<VehicleSelectorProps> = ({
  selectedVehicle,
  setSelectedVehicle,
}) => {
  const vehicles: I_vehicles[] = [
    {
      id: "v-1",
      title: "تاکسی",
      icon: <FaTaxi />,
      onCLick: () => setSelectedVehicle(1),
      thisVehcileType: 1,
    },
    {
      id: "v-2",
      title: "مترو",
      icon: <FaTrain />,
      onCLick: () => setSelectedVehicle(2),
      thisVehcileType: 2,
    },
    {
      id: "v-3",
      title: "اتوبوس",
      icon: <FaBus />,
      onCLick: () => setSelectedVehicle(3),
      thisVehcileType: 3,
    },
  ];

  return (
    <div
      className={`w-full flex flex-row-reverse items-center justify-between py-8 ${styles.buttonsContainer}`}
    >
      {vehicles.map((item) => (
        <SelectorBtn
          key={item.id}
          onClickHandler={item.onCLick}
          titleForShow={item.title}
          selectedVehicle={selectedVehicle}
          vehcileType={item.thisVehcileType}
          styles={{
            background:
              selectedVehicle === item.thisVehcileType
                ? "#FDB813"
                : "transparent",
          }}
        >
          {item.icon}
        </SelectorBtn>
      ))}
    </div>
  );
};

export default VehicleSelector;
