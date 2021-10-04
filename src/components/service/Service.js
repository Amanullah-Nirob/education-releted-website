import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import MainServiceCards from '../MainServiceCards/MainServiceCards';
import './Service.css';
const Service = () => {
    const [serviceCards,setServiceCards]=useState([])
useEffect(()=>{
    fetch(`MainServiceDb/MainServiceDb.json`)
    .then(response=>response.json())
    .then(data=>setServiceCards(data))
},[])
    return (
        <div style={{backgroundColor:'#0f0f11',padding:'80px 0'}}>
           <div className='container'>
               <div className='service-title'><h1>Our Best Services</h1></div>
           <Row  xs={1} md={3} className="g-5">
               {
                 serviceCards.map((serviceCard)=><MainServiceCards key={serviceCard.id} card={serviceCard}/>)  
               }
            </Row>
           </div>
        </div>
    );
};

export default Service;