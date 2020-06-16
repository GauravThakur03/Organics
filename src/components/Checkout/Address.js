import React from "react";
import { Field } from "formik";
const Address = () => {
  return (
    <>
      <h4 className="mb-3">Delivery address</h4>
      <div className="mb-3">
        <label htmlFor="fullName">Full name</label>
        <Field type="text" className="form-control" id="name" name="name" />
        <div className="invalid-feedback">
          Please enter valid full name for delivery address.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email">
          Email <span className="text-muted">(Optional)</span>
        </label>
        <Field
          type="email"
          className="form-control"
          id="email"
          placeholder="you@example.com"
          name="email"
        />
        <div className="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <Field
          type="text"
          className="form-control"
          id="address1"
          placeholder="1234 Main St"
          required
          name="address1"
        />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="address2">
          Address 2 <span className="text-muted">(Optional)</span>
        </label>
        <Field
          type="text"
          className="form-control"
          id="address2"
          placeholder="Apartment or suite"
          name="address2"
        />
      </div>

      <div className="row">
        <div className="col-md-5 mb-3">
          <label htmlFor="country">City</label>
          <Field
            as="select"
            className="custom-select d-block w-100"
            id="country"
            name="city"
            required
          >
            <option value="">Choose...</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Indore">Indore</option>
          </Field>
          <div className="invalid-feedback">Please select a valid city.</div>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="state">State</label>
          <Field
            as="select"
            className="custom-select d-block w-100"
            id="state"
            required
            name="state"
          >
            <option value="">Choose...</option>
            <option value="Telangana">Telangana</option>
            <option value="MP">MP</option>
          </Field>
          <div className="invalid-feedback">Please provide a valid state.</div>
        </div>
        <div className="col-md-3 mb-3">
          <label htmlFor="zip">Zip</label>
          <Field
            type="text"
            className="form-control"
            id="zip"
            placeholder=""
            required=""
            name="pinCode"
          />
          <div className="invalid-feedback">Zip code required.</div>
        </div>
      </div>
    </>
  );
};

export default Address;
