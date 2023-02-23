import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">About Us</Tabs>
        <Tabs to="/add">Add User</Tabs>
        <Tabs to="/all">All Users</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
