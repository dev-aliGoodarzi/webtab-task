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
import { I_adType } from "../../Models/customInterfaces";
import SelectorBtn from "../../util/SelectorBtn/SelectorBtn";
import { bronzeBadgeIcon, goldBadgeIcon, silverBadgeIcon } from "../../Icons";
// Models

type AdTypeSelectorProps = {
  setSelectedAd: React.Dispatch<React.SetStateAction<adType>>;
  selectedAd: adType;
};

const AdTypeSelector: React.FunctionComponent<AdTypeSelectorProps> = ({
  selectedAd,
  setSelectedAd,
}) => {
  const adBtns: I_adType[] = [
    {
      id: "ad-1",
      icon: goldBadgeIcon,
      onCLick: () => setSelectedAd(1),
      adType: 1,
      title: "تبلیغات طلایی",
    },
    {
      id: "ad-2",
      icon: silverBadgeIcon,
      onCLick: () => setSelectedAd(2),
      adType: 2,
      title: "تبلیعات نقره ای",
    },
    {
      id: "ad-3",
      icon: bronzeBadgeIcon,
      onCLick: () => setSelectedAd(3),
      adType: 3,
      title: "تبلیعات برنزی",
    },
  ];

  return (
    <div className="w-full flex flex-row-reverse items-end justify-evenly fixed bottom-0 bg-white ">
      {adBtns.map((item) => (
        <SelectorBtn
          key={item.id}
          onClickHandler={item.onCLick}
          titleForShow={item.title}
          adType={selectedAd}
          selectedAd={item.adType}
          className="flex-col-reverse border-none shadow-none text-sm w-1/3 rounded-none"
          styles={{
            borderBottom:
              selectedAd === item.adType
                ? "2px solid #FDB813"
                : "2px solid transparent",
          }}
        >
          <img src={item.icon} alt={`badgeIcon`} />
        </SelectorBtn>
      ))}
    </div>
  );
};

export default AdTypeSelector;
