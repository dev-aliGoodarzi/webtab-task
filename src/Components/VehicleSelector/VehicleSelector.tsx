// React
import React from "react";
import { vehicleType } from "../../Models/customTypes";
// React
// CSS
import styles from "./VehicleSelector.module.css";
// CSS
// Modules
import { FaTaxi, FaBus, FaTrain } from "react-icons/fa";
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
  return (
    <div
      className={`w-full flex flex-row-reverse items-center justify-between py-8 ${styles.buttonsContainer}`}
    >
      <button
        className={`w-1/4 h-16 flex items-center justify-center box-border `}
        style={{
          background:
            selectedVehicle === 1 || selectedVehicle === "1"
              ? "#FDB813"
              : "transparent",
        }}
        onClick={() => {
          setSelectedVehicle(1);
        }}
      >
        <span className="mr-2">تاکسی</span>
        <FaTaxi />
      </button>
      <button
        className={`w-1/4 h-16 flex items-center justify-center box-border`}
        style={{
          background:
            selectedVehicle === 3 || selectedVehicle === "3"
              ? "#FDB813"
              : "transparent",
        }}
        onClick={() => {
          setSelectedVehicle(3);
        }}
      >
        <span className="mr-2">مترو</span>
        <FaTrain />
      </button>
      <button
        className={`w-1/4 h-16 flex items-center justify-center box-border`}
        style={{
          background:
            selectedVehicle === 2 || selectedVehicle === "2"
              ? "#FDB813"
              : "transparent",
        }}
        onClick={() => {
          setSelectedVehicle(2);
        }}
      >
        <span className="mr-2">اتوبوس</span>
        <FaBus />
      </button>
    </div>
  );
};

export default VehicleSelector;
