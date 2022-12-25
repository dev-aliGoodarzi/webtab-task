// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
// React
// CSS
// CSS
// Moduels
// Moduels

type AdProps = {
  selectedAd: I_Advertise;
};

const Ad: React.FunctionComponent<AdProps> = ({ selectedAd }) => {
  return <div>single Ad :{")"}</div>;
};

export default Ad;
