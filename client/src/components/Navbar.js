import React from "react";
import { Box, Text } from 'gestalt';
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

const Navbar = () => (
  <Box className="Box"
    height={70}
   color="purple"
    padding={1}
    shape="roundedBottom"
  >

    {/* Signin Link goes here */}
    <NavLink to="/signin">
      <Text>Sign In</Text>

    </NavLink>

  </Box>
);

export default Navbar;
