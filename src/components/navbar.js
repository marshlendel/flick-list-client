import React from "react";
import FlickLogo from "../assets/FlickLogo.png";
import Logout from "./logout";
import DisplayList from "./displayList";
import Searchbar from "./searchbar";
import {
  Route,
  Link,
  Switch
} from "react-router-dom"
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
        <NavbarBrand><Link to="/"><img alt="logo" src={FlickLogo} height="200px" /></Link></NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/watchlist"><Button className="button" type="button">Watch List</Button></Link>
            </NavItem>
          </Nav>
          <NavbarText><Logout clearSession={props.clearSession}/></NavbarText>
      </Navbar>
      <Switch>
        <Route exact path="/"><Searchbar sessionToken={props.sessionToken} /></Route>
        <Route exacxt path="/watchlist"><DisplayList sessionToken={props.sessionToken} /></Route>
      </Switch>
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
