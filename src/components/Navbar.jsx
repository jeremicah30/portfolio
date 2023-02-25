import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box>
      <input
        type="checkbox"
        id="main-navigation-toggle"
        className="btn btn--close"
        title="Toggle main navigation"
      />
      <label for="main-navigation-toggle" style={{ zIndex: "999" }}>
        <span></span>
      </label>

      <nav id="main-navigation" className="nav-main" style={{ zIndex: "888" }}>
        <ul className="menu">
          <li className="menu--item">
            <Link className="menu--link" href="#0">
              <Text fontWeight="900">Home</Text>
            </Link>
          </li>
          <li className="menu--item">
            <Link className="menu--link" href="#0">
              <Text fontWeight="900">About Me</Text>
            </Link>
          </li>
          <li className="menu--item">
            <Link className="menu--link" href="#0">
              <Text fontWeight="900">Works</Text>
            </Link>
          </li>
          <li className="menu--item">
            <Link className="menu--link" href="#0">
              <Text fontWeight="900">Contact</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

export default Navbar;
