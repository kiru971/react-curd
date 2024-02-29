import { AppBar, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledLink, StyledTool, StyledTypo } from "../Css/tsakStyle";

const Navbar = () => {
  const navigate = useNavigate();

  const handleOut = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <AppBar position="static">
        <StyledTool>
          <StyledTypo variant="h5">
            <Box>Aequalis</Box>

            <Box>
              <StyledLink to="home/users">Users</StyledLink>
            </Box>
            <Box>
              <StyledLink to="home/networks">Networks</StyledLink>
            </Box>
          </StyledTypo>
          <Box>
            <button className="bt" onClick={handleOut}>
              Log Out
            </button>
          </Box>
        </StyledTool>
      </AppBar>
    </>
  );
};

export default Navbar;
