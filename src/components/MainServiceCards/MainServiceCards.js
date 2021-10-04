import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const MainServiceCards = (props) => {
    const {img,title,rating,price,time}=props.card;

    const serviceCardbtn={
        backgroundColor:'gold',
        border:'1px solid gold',
        padding:'7px 15px',
        borderRadius:'5px'
    }
    return (
        <div>
            <Col>
      <Card style={{backgroundColor:'#222',color:'#fff',padding:'16px 16px'}}data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
        <Card.Img variant="top" src={img} />
        <Card.Body style={{padding:'1rem 0'}}>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{display:'flex'}}>
          <Rating style={{color:'gold',fontSize:'10px',marginRight:'10px'}} emptySymbol="fa fa-star-o fa-2x"fullSymbol="fa fa-star fa-2x"initialRating={rating}readonly></Rating><span>{rating}</span>
          
          </Card.Text>
          <div className='card-more-content'>
              <small style={{marginRight:'15px'}}><img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-user-management-kiranshastry-lineal-color-kiranshastry-4.png"/>0 </small>
              <small><img alt='' src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/25/000000/external-watch-work-from-home-flatart-icons-flat-flatarticons.png"/> {time} </small>
          <hr />
          </div>
          
          <div className="card-price-area" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div className="card-price"><span>${price}</span></div>
              <div className="add-to-card"><img alt='' src="https://img.icons8.com/external-justicon-lineal-color-justicon/25/000000/external-cart-ecommerce-justicon-lineal-color-justicon.png"/> <button style={serviceCardbtn}>Add to card</button></div>
          </div>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default MainServiceCards;