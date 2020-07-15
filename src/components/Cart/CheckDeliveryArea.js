import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { checkPincode } from "../../action-creator/organic";

const CheckDeliveryArea = ({ setIsServiceableArea }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  /** deliveryAreaStatus = null -> Show nothing
   *  deliveryAreaStatus = false -> Sorry, we are not delivering in your area.
   *  deliveryAreaStatus = true -> We are delivering in your area.
   */
  const [deliveryAreaStatus, setDeliveryAreaStatus] = useState(null);

  const onPinCodeEnter = (event) => {
    const pincode = document.getElementById("pincode").value;
    const isValid = /^[1-9][0-9]{5}$/.test(pincode);
    if (isValid) {
      setError(false);
      //Hit pincode api and if delivering in given area then
      dispatch(checkPincode(pincode)).then((response) => {
        setDeliveryAreaStatus(response.available);
        setIsServiceableArea(response.available);
      });
    } else {
      setError(true);
      setIsServiceableArea(false);
    }
  };
  return (
    <>
      <div className="row">
        <h4 className="text-center mx-auto my-3">
          CHECK DELIVERY IN YOUR AREA
        </h4>
        <p className="text-muted mt-1 mb-2 px-1 text-center w-100">
          Enter Pincode to check the Delivery availability
        </p>
      </div>
      <div className="row justify-content-center my-4">
        <div className="form-inline">
          <div className="form-group mx-3 mb-2 position-relative d-flex">
            <input
              type="text"
              maxLength="6"
              name="pincode"
              className="form-control mr-2 mb-0"
              id="pincode"
              required
              aria-describedby="telHelp"
              placeholder="500030"
            />

            {error ? (
              <>
                <br />
                <span className="text-danger position-absolute top-100">
                  Enter valid pin code
                </span>
              </>
            ) : null}
          </div>
          <button onClick={onPinCodeEnter} className="btn btn-outline-primary text-uppercase mb-2">
            Search
          </button>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {deliveryAreaStatus === null ? null : deliveryAreaStatus ? (
          <p className="text-success text-center p-1">
            We are delivering in your area.
          </p>
        ) : (
          <p className="text-danger text-center p-1">
            Sorry, we are not delivering in your area.
          </p>
        )}
      </div>
    </>
  );
};

export default CheckDeliveryArea;
