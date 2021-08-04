import React from "react";
import FlickLogo from "../assets/FlickLogo.png";
import Logout from "./logout";


import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarText
} from "reactstrap";

const WatchListNav = (props) => {

  if (props.token) {
    return (

      <div className="nav-container">
         <Navbar dark navbar-expand="md">
        <NavbarBrand><img onClick={() => props.logoToggler()}alt="logo" src={FlickLogo} height="200px" /></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button className="button" type="button" onClick={() => props.toggler()}>Watch List</Button>
            </NavItem>
          </Nav>
          <NavbarText><Logout clearSession={props.clearSession}/></NavbarText>
      </Navbar>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar dark padding="10px">
        <NavbarBrand href="/"><img alt="logo" src={FlickLogo} height="200px" /></NavbarBrand>
          <Nav navbar>
          </Nav>
      </Navbar>
      </div>
    );
  }
};

export default WatchListNav;
