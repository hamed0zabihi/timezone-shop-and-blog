import React, { Suspense } from "react";
import PreLoadings from "../Utils/PreLoadings";

const Maps = React.lazy(() => import("./Maps"));
const MapLeaflet = () => {
  return (
    <div className="map-container">
      <Suspense fallback={<PreLoadings />}>
        <Maps />
      </Suspense>
      <div>we are happy </div>
    </div>
  );
};

export default MapLeaflet;
