import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import AddUser from "../Modal/AddUser";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
//import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { IoInformationCircle } from "react-icons/io5";
import User from "../page/User";
import { StyledTab } from "../Css/styelTak";

const UserList = () => {
  const { users } = useContext(UserContext);
  const [state, setState] = useState(false);
  const [sortDown, setSort] = useState(true);
  const [data, setData] = useState(users);
  const [popup, setPop] = useState();

  useEffect(() => {
    setData(users);
  }, [users]);

  const handleSort = () => {
    const sortItem = [...data];
    if (sortDown) {
      sortItem.sort((a, b) => (a.user > b.user ? 1 : -1));
      setPop("Ascending");
    } else {
      sortItem.sort((a, b) => (a.user < b.user ? 1 : -1));
      setPop("Descending");
    }
    console.log(sortItem);
    setSort(!sortDown);
    setData(sortItem);
  };

  return (
    <div className="container">
      <TableContainer sx={{ maxWidth: 800, maxHeight: 500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTab align="center">Dp</StyledTab>
              <StyledTab>
                Login
                <IoInformationCircle
                  style={{ verticalAlign: "middle", marginLeft: 5 }}
                  onClick={handleSort}
                  title={popup}
                />
              </StyledTab>
              <StyledTab>Role</StyledTab>
              <StyledTab>Status</StyledTab>
              <StyledTab align="center">Actions</StyledTab>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((uses) => (
              <tr key={uses.id}>
                <User uses={uses} />
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="add">
        <button className="btn2" onClick={() => setState(true)}>
          Add new user
        </button>
        {state && <AddUser state={state} setState={setState} />}
      </div>
    </div>
  );
};

export default UserList;
