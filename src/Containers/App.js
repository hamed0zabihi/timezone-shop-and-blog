import React from "react";
import { BrowserRouter } from "react-router-dom";

import TimeZone from "./TimeZone";

const App = () => {
  return (
    <BrowserRouter>
      <TimeZone />
    </BrowserRouter>
  );
};
export default App;
