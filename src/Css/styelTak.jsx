import { TableCell, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledTab = styled(TableCell)({
  backgroundColor: " rgb(203, 205, 207)",
  fontSize: "17px",
  fontWeight: "bold",
});

export const StyledLinks = styled(NavLink)({
  textDecoration: "none",
  color: "blue",
  fontSize: "15px",
});

export const StyledDiv = styled(Toolbar)({
  backgroundColor: "#dfdede",
});

export const StyledUser = styled(TableCell)({
  fontSize: "15px",
});
