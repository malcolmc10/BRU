import React from "react";
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

const Navbar = () => (
  <Box className="Box"
    height={70}
   color="purple"
    padding={1}
    shape="roundedBottom"
    display="flex"
    alignItems="center"
    justifyContent="around"
  >

    {/* Signin Link goes here */}
    <NavLink to="/signin">
      <Text size="xl" color="lightGray">Sign In</Text>
    </NavLink>

    {/* Logo */}

    <NavLink to="/">
      <Box
        display="flex"
        alignItems="center"
      >
      <Box
        height={50}
          width={50}
          margin={2}
      >
      <Image
      alt="BRU-Logo"
        src="./icons/beer.svg"
        naturalHeight={1}
        naturalWidth={1}
        
        />
        </Box>
      <Heading size="xs" color="white">

        BRU

      </Heading>
      </Box>
    </NavLink>

    {/* Signup Link goes here */}
    <NavLink to="/signup">
      <Text size="xl" color="lightGray">
        Sign Up
      </Text>

    </NavLink>

  </Box>
);

export default Navbar;
