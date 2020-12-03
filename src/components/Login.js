import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getOtp } from "../services/organic";
import { useDispatch } from "react-redux";
import { login } from "../action-creator/organic";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    formState,
    getValues,
  } = useForm({ mode: "all" });

  const userNamePattern = /^[0-9]{10}$/;
  const otpPattern = /^[0-9]{6}$/;

  const onSubmit = (data) => {
    dispatch(
      login(data, (error) => {
        setLoginErrorMsg(error.message);
      })
    );
  };
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);
  const [isValidOtp, setIsValidOtp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpBtnClicked, setOtpBtnClicked] = useState(false);

  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const dispatch = useDispatch();

  const onChange = (event) => {
    if (event.target.name === "userName") {
      if (userNamePattern.test(event.target.value)) {
        setIsValidMobileNumber(true);
      } else {
        setIsValidMobileNumber(false);
      }
    }
    if (event.target.name === "otp") {
      if (otpPattern.test(event.target.value)) {
        setIsValidOtp(true);
      } else {
        setIsValidOtp(false);
      }
    }
    if (event.target.name === "password") {
      if (event.target.value) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(false);
      }
    }
  };
  const multipleValues = getValues(["userName", "password", "otp"]);
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
          <label htmlFor="userName">Username</label>
          <input
            className="form-control"
            name="userName"
            placeholder="Enter registered moble number"
            ref={register({ required: true, pattern: userNamePattern })}
            defaultValue=""
          />
          {/* errors will return when field validation fails  */}
          {errors.userName && (
            <div className="help-block text-danger">
              Please enter 10 digit mobile number
            </div>
          )}
          {loginErrorMsg ? (
            <div className="help-block text-danger">{loginErrorMsg}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            ref={register()}
            defaultValue=""
          />
          {errors.password && (
            <div className="help-block text-danger">Password is required</div>
          )}
        </div>
        <div className="d-flex justify-content-center m-2">OR</div>
        <div className="form-group d-flex justify-content-center flex-column">
          <button
            className={
              isValidMobileNumber
                ? "btn btn-success w-100"
                : "btn btn-light w-100"
            }
            disabled={!isValidMobileNumber}
            onClick={() => {
              setOtpBtnClicked(true);
              getOtp(multipleValues.userName).then((res) => {
                setOtpSent(res.otp);
              });
            }}
          >
            Get OTP
          </button>
          {otpBtnClicked && isValidMobileNumber ? (
            otpSent ? (
              <div className="help-block text-success m-1">OTP Sent.</div>
            ) : (
              <div className="help-block text-danger m-1">
                This mobile number is not registered, please register.
              </div>
            )
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="otp">OTP</label>
          <input
            className="form-control"
            maxLength="6"
            minLength="6"
            placeholder="Enter OTP"
            name="otp"
            ref={register({ pattern: otpPattern })}
            defaultValue=""
          />
          {errors.otp && (
            <div className="help-block text-danger m-1">Incorrect OTP</div>
          )}
        </div>
        <div className="form-group d-flex justify-content-center">
          {isValidMobileNumber && (isValidPassword || isValidOtp) ? (
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
