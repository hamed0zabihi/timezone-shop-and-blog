import React from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../Components/Utils/ScrollToTop";
import TimeZone from "./Routes/TimeZone";
//test
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TimeZone />
    </BrowserRouter>
  );
};
export default App;
