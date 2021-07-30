import React from 'react';
// import FlickLogo from '../assets/FlickLogo.png';
import {
    Navbar,
    NavbarBrand,
    Button
} from 'reactstrap';

const WatchListNav = (props) => {

    return (
    <div className="nav-container">
        <Navbar className="navbar" style = {{padding: '30px', backgroundColor: 'black', height: '50px', textAlign: 'left'}} fixed='top' bg-primary light expand="md">
        <NavbarBrand className="flick"><b>FlickList</b></NavbarBrand>
        <Button className="button" outline color="primary" style={{marginLeft: '40%'}}><b>My Watch List</b></Button>{' '}
        <Button className="button" outline color="primary" style={{float: 'right'}}><b>Logout</b></Button>{' '}
    </Navbar>
    </div>
    );
}

export default WatchListNav;

