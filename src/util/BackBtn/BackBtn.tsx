// React
import React from "react";
// React
// Modules
import { useNavigate } from "react-router-dom";
// Modules

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="px-7 py-2 bg-slate-400 rounded-lg mt-10"
      onClick={() => navigate(-1)}
    >
      بازگشت به عقب
    </div>
  );
};

export default BackBtn;
