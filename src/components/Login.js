import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    formState,
    getValues,
  } = useForm({ mode: "onChange" });
  const userNamePattern = /^[0-9]{10}$/;
  const onSubmit = (data) => console.log(data);

  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);

  const onChange = (event) => {
    if (
      event.target.name === "username" &&
      userNamePattern.test(event.target.value)
    ) {
      setIsValidMobileNumber(true);
    }
  };
  const multipleValues = getValues(["username", "password", "otp"]);
  return (
    <div className="col-md-9 col-md-offset-3 mx-auto">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={(event) => {
          onChange(event);
        }}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            placeholder="Enter registered moble number"
            ref={register({ required: true, pattern: userNamePattern })}
            defaultValue=""
          />
          {/* errors will return when field validation fails  */}
          {errors.username && (
            <div className="help-block text-danger">
              Please enter 10 digit mobile number
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            ref={register({ required: true })}
            defaultValue=""
          />
          {errors.password && (
            <div className="help-block text-danger">Password is required</div>
          )}
        </div>
        <div className="d-flex justify-content-center m-2">OR</div>
        <div className="form-group d-flex justify-content-center">
          <button
            className={
              isValidMobileNumber
                ? "btn btn-success w-100"
                : "btn btn-light w-100"
            }
            disabled={!isValidMobileNumber}
          >
            Get OTP
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="otp">OTP</label>
          <input
            type="number"
            className="form-control"
            maxLength="6"
            minLength="6"
            placeholder="Enter OTP"
            name="otp"
            ref={register({ required: true, pattern: /^[0-9]{6}$/ })}
            defaultValue=""
          />
          {errors.otp && (
            <div className="help-block text-danger">Incorrect OTP</div>
          )}
        </div>
        <div className="form-group d-flex justify-content-center">
          {isValidMobileNumber &&
          (multipleValues.otp || multipleValues.password) ? (
            <input
              type="submit"
              className="btn btn-success w-100"
              value="Login"
            />
          ) : (
            <input
              type="submit"
              className="btn btn-light w-100"
              value="Login"
              disabled
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
