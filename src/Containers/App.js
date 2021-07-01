import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../Components/Utils/ScrollToTop";
import TimeZone from "./TimeZone";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TimeZone />
    </BrowserRouter>
  );
};
export default App;
