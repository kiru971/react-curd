import { Box, Divider, Modal, Typography } from "@mui/material";
import React, { useContext, useReducer, useState } from "react";
import { UserContext } from "../context/UserContext";
import { StyledMbox, StyledMod } from "../Css/tsakStyle";
// import { useDispatch } from "react-redux";
// import { addUser } from "../reduxtoolkit/slice/UserSlice";

const initialUser = {
  user: "",
  dp: "",
  role: "Admin",
  status: "Loggedout",
  pass: "",
  pass1: "",
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...prevState, user: action.payload };
    case "IMAGE":
      return { ...prevState, dp: action.payload };
    case "ROLE":
      return { ...prevState, role: action.payload };
    case "STATUS":
      return { ...prevState, status: action.payload };
    case "PASSWORD":
      return { ...prevState, pass: action.payload };
    case "COPASSWORD":
      return { ...prevState, pass1: action.payload };
    default:
      break;
  }
};

const AddUser = ({ state, setState }) => {
  const { addUser } = useContext(UserContext);
  // const dispatch = useDispatch();

  const [list, dispatcher] = useReducer(reducer, initialUser);
  const [formError, setFormError] = useState({});
  //const [image, setImage] = useState();

  const usehandler = (e) => {
    dispatcher({ type: "USERNAME", payload: e.target.value });
  };

  const filehandler = (e) => {
    if (e.target.files[0]) {
      // setImage(URL.createObjectURL(e.target.files[0]));
    }
    dispatcher({
      type: "IMAGE",
      payload: URL.createObjectURL(e.target.files[0]),
    });
  };

  const rolehandler = (e) => {
    dispatcher({ type: "ROLE", payload: e.target.value });
  };
  const stathandler = (e) => {
    dispatcher({ type: "STATUS", payload: e.target.value });
  };
  const passhandler = (e) => {
    dispatcher({ type: "PASSWORD", payload: e.target.value });
  };
  const pass1handler = (e) => {
    dispatcher({ type: "COPASSWORD", payload: e.target.value });
  };

  const { user, dp, role, status, pass, pass1 } = list;
  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(true);
      addUser(dp, user, role, status, pass, pass1);
      // dispatch(addUser({ dp, user, role, status, pass, pass1 }));
      setState(false);
    }
  };

  const validate = () => {
    let isValid = true;
    let error = {};
    if (!list.user) {
      isValid = false;
      error.user = "Username required";
    }
    if (!list.dp) {
      isValid = false;
      error.dp = "Image required";
    }
    if (!list.pass) {
      isValid = false;
      error.pass = "Password required";
    }
    if (!list.pass1) {
      isValid = false;
      error.pass1 = "Confirm password required";
    } else if (list.pass !== list.pass1) {
      isValid = false;
      error.pass1 = "Password does not match";
    }
    setFormError(error);
    return isValid;
  };

  return (
    <Modal open={state}>
      <StyledMod>
        <Typography variant="h5">
          Create new User
          <span className="span" onClick={() => setState(false)}>
            &times;
          </span>
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit}>
            <div className="formUser">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  className="formUser-input"
                  type="text"
                  placeholder="Enter Username"
                  onChange={usehandler}
                />
                {formError.user && user.length < 1 ? (
                  <span>{formError.user}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="dp">Image</label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={filehandler}
                />
                {formError.dp && dp.length < 1 ? (
                  <span>{formError.dp}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <select
                  className="formUser-input"
                  name="role"
                  id="role"
                  onChange={rolehandler}
                >
                  <option value="Admin">Admin</option>
                  <option value="Client">Client</option>
                </select>
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  className="formUser-input"
                  name="status"
                  onChange={stathandler}
                >
                  <option value="Loggedout">Loggedout</option>
                  <option value="Active">Active</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
              <div>
                <label htmlFor="pass">Password</label>
                <input
                  className="formUser-input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={passhandler}
                />
                {formError.pass && pass.length < 1 ? (
                  <span>{formError.pass}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="pass1">Confirm password</label>
                <input
                  className="formUser-input"
                  type="password"
                  placeholder="Enter Password"
                  onChange={pass1handler}
                />
                {formError.pass1 ? <span>{formError.pass1}</span> : ""}
              </div>
            </div>
            <Divider sx={{ mt: 3 }} />
            <StyledMbox>
              <button className="btn3" onClick={() => setState(false)}>
                cancel
              </button>{" "}
              &nbsp;
              <button className="btn4" type="submit">
                Save
              </button>
            </StyledMbox>
          </form>
        </Box>
      </StyledMod>
    </Modal>
  );
};

export default AddUser;
