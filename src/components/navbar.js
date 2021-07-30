import React from 'react';
import FlickLogo from '../assets/FlickLogo.png';
import {
    Navbar,
    NavbarBrand,
    Button
} from 'reactstrap';

const WatchListNav = (props) => {

    return (
    <div className="nav-container">
        <Navbar className="navbar" style = {{padding: '1px', backgroundColor: 'black', height: '50px', textAlign: 'left'}} fixed='top' bg-primary light expand="md">
        <NavbarBrand className="flick"><b></b></NavbarBrand>
        <img src={FlickLogo} alt ="Logo" width="300" height="300" style={{marginTop: '-4%'}} className="d-inline-block align-top"/> {' '}
        <Button className="button" outline color="primary" style={{marginLeft: '30%', marginTop: '0%'}}><b>My Watch List</b></Button>{' '}
        <Button className="button" outline color="primary" style={{float: 'right', padding: '10px', marginTop: '3%', marginRight: '5%'}}><b>Logout</b></Button>{' '}
    </Navbar>
    </div>
    );
}

export default WatchListNav;

