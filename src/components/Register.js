import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../action-creator/organic";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    errors,
    formState,
    getValues,
  } = useForm({ mode: "all" });
  const userNamePattern = /^[0-9]{10}$/;
  const emailIdPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { isValid } = formState;

  const dispatch = useDispatch();
  const [registrationMsg, setRegistrationMsg] = useState("");

  const onSubmit = (data) => {
    const { password1, ..._data } = data;
    dispatch(
      registerUser(_data, (res) => {
        setRegistrationMsg(res.message);
        if (res.message.includes("Success")) reset();
      })
    );
  };

  const RegMsgstyle = registrationMsg.includes("Success")
    ? "text-success"
    : "text-danger";
  return (
    <div className="col-md-9 col-md-offset-3 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {registrationMsg ? (
          <div className={`help-block ${RegMsgstyle}`}>{registrationMsg}</div>
        ) : null}
        <div className="form-group">
          <label htmlFor="Name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            name="Name"
            ref={register({ required: true })}
            defaultValue=""
          />
          {errors.Name && (
            <div className="help-block text-danger">Full Name is required</div>
          )}
        </div>
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
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter new password"
            ref={register({ required: true })}
            defaultValue=""
          />
          {errors.password && (
            <div className="help-block text-danger">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            name="password1"
            placeholder="Re-type password"
            ref={register({
              required: true,
              validate: (value) => value === getValues("password"),
            })}
            defaultValue=""
          />
          {errors.password1 && (
            <div className="help-block text-danger">Password doesn't match</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address (Optional)</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Enter valid email address"
            ref={register({ pattern: emailIdPattern })}
            defaultValue=""
          />
          {errors.email && (
            <div className="help-block text-danger">Invalid email address</div>
          )}
        </div>
        <div className="form-group d-flex justify-content-center">
          {isValid ? (
            <input
              type="submit"
              className="btn btn-success w-100"
              value="Register"
            />
          ) : (
            <input
              type="submit"
              className="btn btn-light w-100"
              value="Register"
              disabled
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
