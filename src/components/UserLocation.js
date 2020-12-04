import React from "react";
import PopOver from "./PopOver";
import { default_delivery_location_value } from "../state/defaultStates";

const UserLocation = () => {
  return (
    <div className="mr-2 d-inline">
      <PopOver title={default_delivery_location_value} />
    </div>
  );
};

export default UserLocation;
