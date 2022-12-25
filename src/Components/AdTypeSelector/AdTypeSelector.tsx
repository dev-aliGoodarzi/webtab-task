// React
import React from "react";
// React
// CSS
import styles from "./AdTypeSelector.module.css";
// CSS
// Icons
import { SlBadge } from "react-icons/sl";
// Icons
// Models
import { adType } from "../../Models/customTypes";
// Models

type AdTypeSelectorProps = {
  setSelectedAd: React.Dispatch<React.SetStateAction<adType>>;
  selectedAd: adType;
};

const AdTypeSelector: React.FunctionComponent<AdTypeSelectorProps> = ({
  selectedAd,
  setSelectedAd,
}) => {
  return (
    <div>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
};

export default AdTypeSelector;
