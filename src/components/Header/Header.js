import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <div className='header' data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="100">
    <Navbar className='navbar-dark' expand="lg">
    <Container>
    {/* header title hear start =============================================================================*/}
    <Navbar.Brand href="#" className='header-title'>
    <span>Sk</span>ilify
    </Navbar.Brand>
    {/* header-logo hear start end ============================================================================*/}

    {/* header list hear start ================================================================================*/}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav className="m-auto my-2 my-lg-0 Header-list"style={{ maxHeight: '100px' }}navbarScroll>
    <NavLink to="/home"activeStyle={{fontWeight: "bold",color: "gold"}}>home</NavLink>
    <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "gold"}}>service</NavLink>
    <NavLink to="/about"activeStyle={{fontWeight: "bold",color: "gold"}}>about</NavLink>
    <NavLink to="/contact"activeStyle={{fontWeight: "bold",color: "gold"}}>contact</NavLink>
    </Nav>
    {/* header list hear end ====================================================================================*/}

    {/* header contact hear =====================================================================================*/}
    <div className="d-flex header-contact">
    <img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-search-ecommerce-kiranshastry-lineal-color-kiranshastry.png"/>
    <img alt='' src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/25/000000/external-cart-marketplace-itim2101-lineal-color-itim2101.png"/>
    <button className='btn'>Register</button>
    </div>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
};

export default Header;