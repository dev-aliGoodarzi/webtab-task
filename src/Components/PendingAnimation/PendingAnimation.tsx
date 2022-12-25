// React
import React from "react";
// React
// CSS
import styles from "./PendingAnimation.module.css";
// CSS
const PendingAnimation = () => {
  return (
    <>
      <div className={`${styles.pending} w-10 h-10`}></div>
      در حال بارگذاری
    </>
  );
};

export default PendingAnimation;
