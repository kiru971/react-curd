import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { TableCell } from "@mui/material";
import { StyledUser } from "../Css/styelTak";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../reduxtoolkit/slice/UserSlice";

const User = ({ uses }) => {
  const { deleteUser } = useContext(UserContext);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDel = (id) => {
    if (window.confirm("Do you want to delete")) {
      deleteUser(uses.id);
      // dispatch(removeUser(uses.id));
    }
  };

  console.log(uses);

  return (
    <>
      <TableCell align="center">
        <img src={`${uses.dp}`} alt="user" className="img" />
      </TableCell>
      <StyledUser>{uses.user}</StyledUser>
      <StyledUser sx={{ fontSize: 15 }}>{uses.role}</StyledUser>
      <StyledUser sx={{ fontSize: 15 }}>{uses.status}</StyledUser>
      <StyledUser align="center">
        <button
          className="btn"
          onClick={() => navigate(`/home/users/${uses.id}`)}
        >
          Details
        </button>
        &nbsp;
        <button className="btn1" onClick={() => handleDel(uses.id)}>
          Delete
        </button>
      </StyledUser>
    </>
  );
};

export default User;
