import React from "react";
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
  <Box 
    height={70}
    color="transparent"
    padding={1}
    shape="roundedBottom"
    display="flex"
    alignItems="center"
    justifyContent="between"
    
    
    
    
  >

    {/* Signin Link goes here */}
    {/* <NavLink to="/signin">
      <Text size="xl" color="darkGray">Sign In</Text>
    </NavLink> */}

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
      <Heading size="xs" color="orchid">

        BRU

      </Heading>
      </Box>
    </NavLink>

    {/* Signup Link goes here */}
   <Box display="flex">
    <NavLink to="/signin" position="absolute" >
      <Text size="md"  color="darkGray">Login</Text>
      </NavLink>
      
      <Text size="md">/</Text>
   
   
    <NavLink to="/signup" >
      <Text size="md" color="darkGray" >
        Register
      </Text>

      </NavLink>
      </Box>

  </Box>
);

export default Navbar;
