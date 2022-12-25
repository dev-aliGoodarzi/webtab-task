// React
import React from "react";
import { I_Advertise } from "../../Models/advertiseInterface";
// React
// CSS
// CSS
// Modules
// Modules

type AdCardProps = {
  data: I_Advertise;
};

const AdCard: React.FunctionComponent<AdCardProps> = ({ data }) => {
  return <div>{data.phone}</div>;
};

export default AdCard;
