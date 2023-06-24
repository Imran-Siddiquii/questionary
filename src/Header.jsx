import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { NavLinkDiv } from "./style";

const StyledAppBar = styled(AppBar)`
  background-color: #4267b2;
  position: sticky;
  top: 0;
`;

const typoColor = {
  color: "white",
  padding: "0 1rem",
};

const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLinkDiv to="/" style={{ color: "white" }}>
            Connect
          </NavLinkDiv>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
