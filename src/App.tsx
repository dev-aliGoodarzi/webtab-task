// React
import React from "react";
// React
// Components
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
// Components
// Models
// Models
// Modules
// Modules

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
