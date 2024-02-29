import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
// import { useSelector } from "react-redux";

const initialState = {
  login: "",
  password: "",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...prevState, login: action.payload };
    case "PASSWORD":
      return { ...prevState, password: action.payload };
    default:
      break;
  }
};

const Login = () => {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const [formError, setFormError] = useState({});

  const { users } = useContext(UserContext);

  // const users = useSelector((state) => state.user.taskList);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    dispatcher({ type: "USERNAME", payload: e.target.value });
  };
  const handlePass = (e) => {
    dispatcher({ type: "PASSWORD", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(validate());
    if (validate()) {
      console.log(state);
      const userCheck = users.find(
        (val) => state.login === val.user && state.password === val.pass
      );
      if (userCheck) {
        localStorage.setItem("username", JSON.stringify(state.login));
        localStorage.setItem("password", JSON.stringify(state.password));
        navigate("home/users");
      } else {
        alert("Invalid Username or Password");
      }
    }
  };

  const validate = () => {
    let isValid = true;
    let error = {};
    if (state.login === "") {
      isValid = false;
      error.user = "Username Required!";
    }

    if (state.password === "") {
      isValid = false;
      error.pass = "Password Required!";
    }
    setFormError(error);
    return isValid;
  };

  return (
    <div className="container">
      <div className="flex">
        <form onSubmit={handleSubmit} className="formlogin">
          <div>
            <label htmlFor="login">Login</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Login"
              onChange={handleLogin}
            />
          </div>
          {formError.user && state.login < 1 ? (
            <>
              <p>{formError.user}</p> <br />
            </>
          ) : (
            ""
          )}
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handlePass}
            />
          </div>
          {formError.user && state.password < 1 ? (
            <>
              <p>{formError.pass}</p> <br />
            </>
          ) : (
            ""
          )}
          <div>
            <button className="btn5" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
