import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Button
} from 'reactstrap';

const TopBar = (props) => {

 return (
    <div>
    <Navbar style = {{padding: '10px', backgroundColor: 'black', height: '50px', textAlign: 'left'}} fixed='top' bg-primary light expand="md">
        <NavbarBrand href="/"className="nav" style={{fontFamily: 'sans-serif', color: 'white'}}>FlickList</NavbarBrand>
        <Button outline color="primary" style={{marginLeft: '40%'}}>My Watch List</Button>{' '}
        <Button outline color="primary" style={{float: 'right'}}>Logout</Button>{' '}
    </Navbar>
    </div>
    );
}

export default TopBar;