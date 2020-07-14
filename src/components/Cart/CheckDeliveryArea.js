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

  const onZipCodeEnter = (event) => {
    const zipcode = document.getElementById("zipcode").value;
    const isValid = /^[1-9][0-9]{5}$/.test(zipcode);
    if (isValid) {
      setError(false);
      //Hit zipcode api and if delivering in given area then
      dispatch(checkPincode(zipcode)).then((response) => {
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
        <h4 className="text-center mx-auto my-3 text-capitalize">
          check delivery area
        </h4>
        <p className="text-muted mt-1 mb-2 px-1 text-center w-100">
          Enter zipcode to check product availability in your area. We are
          constantly expanding our delivery area, so please check back if you're
          not currently in our delivery area.
        </p>
      </div>
      <div className="row justify-content-center my-4">
        <div className="form-inline">
          <div className="form-group mx-3 mb-2 position-relative d-flex">
            <input
              type="text"
              maxLength="6"
              name="zipcode"
              className="form-control mr-2 mb-0"
              id="zipcode"
              required
              aria-describedby="telHelp"
              placeholder="500030"
            />

            {error ? (
              <>
                <br />
                <span className="text-danger position-absolute top-100">
                  Enter valid zip code
                </span>
              </>
            ) : null}
          </div>
          <button onClick={onZipCodeEnter} className="btn btn-primary mb-2">
            Check
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
