import React from "react";
import { Field } from "formik";
const Phone = () => {
  return (
    <>
      <h4 className="mb-3">Mobile number</h4>

      <Field
        type="text"
        maxLength="10"
        name="mobile"
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
