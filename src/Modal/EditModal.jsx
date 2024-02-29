import { Box, Divider, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { StyledMbox, StyledMod } from "../Css/tsakStyle";
import { UserContext } from "../context/UserContext";
// import { useDispatch } from "react-redux";
// import { updateUser } from "../reduxtoolkit/slice/UserSlice";

const EditModal = ({ selected, setSelected, toggle, setToggle }) => {
  const { detailUser } = useContext(UserContext);
  // const dispatch = useDispatch();
  const [formError, setFormError] = useState({});

  const handleUse = (e) => {
    setSelected({ ...selected, user: e.target.value });
  };

  const handleFile = (e) => {
    setSelected({ ...selected, dp: URL.createObjectURL(e.target.files[0]) });
  };
  const handleRol = (e) => {
    setSelected({ ...selected, role: e.target.value });
  };

  const handleStat = (e) => {
    setSelected({ ...selected, status: e.target.value });
  };

  const handlePass = (e) => {
    setSelected({ ...selected, pass: e.target.value });
  };

  const handlePass1 = (e) => {
    setSelected({ ...selected, pass1: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (validate()) {
      detailUser(selected);
      // dispatch(updateUser(selected));
      setToggle(false);
    }
  };

  const validate = () => {
    let isValid = true;
    let error = {};
    if (!selected.user) {
      isValid = false;
      error.user = "Username required";
    }
    if (!selected.dp) {
      isValid = false;
      error.dp = "Image required";
    }
    if (!selected.pass) {
      isValid = false;
      error.pass = "Password required";
    }
    if (!selected.pass1) {
      isValid = false;
      error.pass1 = "Confirm password required";
    } else if (selected.pass !== selected.pass1) {
      isValid = false;
      error.pass1 = "Password does not match";
    }
    setFormError(error);
    return isValid;
  };

  return (
    <Modal open={toggle}>
      <StyledMod>
        <Typography variant="h5">
          Edit User
          <span className="span" onClick={() => setToggle(false)}>
            &times;
          </span>
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ mt: 3 }}>
          <form onSubmit={submitHandle}>
            <div className="formUser">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="user"
                  className="formUser-input"
                  defaultValue={selected.user}
                  onChange={handleUse}
                />
                {formError.user && selected.user.length < 1 ? (
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
                  onChange={handleFile}
                />
                {formError.dp && selected.dp.length < 1 ? (
                  <span>{formError.dp}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <select
                  name="role"
                  id="role"
                  value={selected.role}
                  className="formUser-input"
                  onChange={handleRol}
                >
                  <option value="Admin">Admin</option>
                  <option value="Client">Client</option>
                  <option value="Super-admin">Super-admin</option>
                </select>
              </div>
              <div>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  value={selected.status}
                  className="formUser-input"
                  onChange={handleStat}
                >
                  <option value="Loggedout">Loggedout</option>
                  <option value="Active">Active</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
              <div>
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  name="pass"
                  value={selected.pass}
                  className="formUser-input"
                  onChange={handlePass}
                />
                {formError.pass && selected.pass.length < 1 ? (
                  <span>{formError.pass}</span>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label htmlFor="pass1">Confirm password</label>
                <input
                  type="password"
                  name="pass1"
                  className="formUser-input"
                  value={selected.pass1}
                  onChange={handlePass1}
                />
                {formError.pass1 ? <span>{formError.pass1}</span> : ""}
              </div>
            </div>
            <Divider sx={{ mt: 3 }} />
            <StyledMbox>
              <button className="btn3" onClick={() => setToggle(false)}>
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

export default EditModal;
