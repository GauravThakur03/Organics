import React from "react";
const Phone = () => {
  return (
    <>
      <h4 className="mb-3">Mobile number</h4>

      <input
        type="text"
        maxLength="10"
        name="phone"
        className="form-control mb-2 mr-sm-2 mb-sm-0"
        id="phoneNum"
        required
        aria-describedby="telHelp"
        placeholder="Enter 10 digit mobile number"
      />

      <hr className="mb-4" />
    </>
  );
};

export default Phone;