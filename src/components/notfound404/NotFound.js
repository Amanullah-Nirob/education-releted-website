import React from 'react';
import { NavLink } from 'react-router-dom';
import notfoundLogo from '../../img/7866.png_860-removebg-preview.png'
const NotFound = () => {
    return (
        <div className='text-center' style={{backgroundColor:'#0f0f11',padding:'130px 0'}}>
            <img src={notfoundLogo} alt="" />
            <h1 style={{color:'#fff'}}>Page Not Found</h1>
            <NavLink to="/home"activeStyle={{fontWeight: "bold",color: "red"}}><button className='btn'>home Back</button></NavLink>
        </div>
    );
};

export default NotFound;