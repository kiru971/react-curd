import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { StyledBox, StyledTy } from "../Css/tsakStyle";
import EditModal from "../Modal/EditModal";
// import { useSelector } from "react-redux";

export const DetailContext = createContext();

const DetailView = () => {
  const { id } = useParams();

  const { users } = useContext(UserContext);
  // const users = useSelector((state) => state.user.taskList);

  const [toggle, setToggle] = useState(false);

  const [selected, setSelected] = useState({
    id: "",
    user: "",
    dp: "",
    role: "",
    status: "",
    pass: "",
    pass1: "",
  });

  useEffect(() => {
    const selected = users.find((user) => user.id === Number(id));
    console.log(selected);
    setSelected(selected);
  }, [id, users]);

  return (
    <>
      <StyledBox>
        <StyledTy variant="h6">User</StyledTy>
        <hr />
        <div className="list">
          <p>Username: {selected.user}</p>
          <p>Status: {selected.status}</p>
          <p className="rol">Role: {selected.role}</p>
          <p className="detail">
            <img src={`${selected.dp}`} alt="user" />{" "}
          </p>
        </div>
        <div className="edit">
          <button className="btn6" onClick={() => setToggle(true)}>
            Edit
          </button>
          {toggle && (
            <EditModal
              selected={selected}
              setSelected={setSelected}
              toggle={toggle}
              setToggle={setToggle}
            />
          )}
        </div>
      </StyledBox>
    </>
  );
};

export default DetailView;
