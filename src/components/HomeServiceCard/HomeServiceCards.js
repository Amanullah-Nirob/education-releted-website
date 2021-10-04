import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeServiceCard.css'
const HomeServiceCards = (props) => {
    const {img,title,logoImg,rating,see,video,logoPersoneNmae,price,priviusprice}=props.homeCard
    return (
        <div className='homeServiceSingleCard'>
              <Col>
                         <Card style={{backgroundColor:'#222',color:'#fff',padding:'15px 15px'}} data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                           <Card.Img variant="top" src={img} />
                           <Card.Body>
                               <div className="card-avidense-details">
                                   <div><p><img alt='' src="https://img.icons8.com/color/25/000000/star--v1.png"/> {rating}</p></div>
                                   <div><p><img alt='' src="https://img.icons8.com/fluency/25/000000/visible.png"/> {see}</p></div>
                                   <div><p><img alt='' src="https://img.icons8.com/flat-round/22/000000/play--v1.png"/> {video}</p></div>
                                 </div>
                             <Card.Title><h3>{title}</h3></Card.Title>
                             <Card.Text>
                            <div className="card-footer" style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid #444'}}>
                                <div className='trainer' style={{display:'flex',alignItems:'center'}}>
                                    <div style={{marginRight:'10px'}}><img src={logoImg} alt="" /></div>
                                    <div>{logoPersoneNmae}</div>
                                    </div>
                                <div className='price' style={{display:'flex',alignItems:'center'}}>
                                    <div style={{marginRight:'10px'}}><del>${priviusprice}</del></div>
                                    <div style={{color:'#d5b405',fontWeight:'700'}}>${price}</div>
                                    </div>
                            </div>
                             </Card.Text>
                           </Card.Body>
                         </Card>
                       </Col>
        </div>
    );
};

export default HomeServiceCards;