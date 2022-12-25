// React
import React from "react";
// React
// CSS
import _styles from "./SelectorBtn.module.css";
// CSS
// Models
import { adType, vehicleType } from "../../Models/customTypes";
// Models

type SelectorBtnProps = {
  onClickHandler: Function;
  className?: string;
  styles?: React.CSSProperties;
  //
  vehcileType?: vehicleType;
  selectedVehicle?: vehicleType;
  //
  adType?: adType;
  selectedAd?: adType;
  //
  titleForShow: string;
  children: any;
};

const SelectorBtn: React.FunctionComponent<SelectorBtnProps> = ({
  onClickHandler,
  className,
  styles,
  adType,
  vehcileType,
  selectedVehicle,
  selectedAd,
  titleForShow,
  children,
}) => {
  return (
    <button
      className={`w-1/4 h-16 flex items-center justify-center box-border ${className} ${_styles.selectorBtn}`}
      style={{
        background: selectedVehicle === vehcileType ? "#FDB813" : "transparent",
        borderBottom: `${selectedAd === adType ? "2px solid yelow" : "none"}`,
        ...styles,
      }}
      onClick={() => onClickHandler()}
    >
      <span className="mr-2">{titleForShow}</span>
      {children}
    </button>
  );
};

export default SelectorBtn;
