import React from 'react';
import { Container, FormControl, InputGroup,Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
import HomeServiceCards from '../HomeServiceCard/HomeServiceCards';

// partnar logo import hear start===========================================================================
import logo from '../../img/client-3.png'
import logo2 from '../../img/7.png'
import logo3 from '../../img/6-removebg-preview.png'
import logo4 from '../../img/corporate-logo-design1-removebg-preview.png' 
import logo5 from '../../img/kaman.png'
import logo6 from '../../img/oman.png'
// partnar logo import hear end==============================================================================

const Home = () => {
    const [homeServiceCards,setHomeServiceCard]=useState([])
    useEffect(()=>{
        fetch(`HomePageServiceDb/HomePageServiceDb.json`)
        .then(response=>response.json())
        .then(data=>setHomeServiceCard(data))
    },[])
    return (
        <div>
{/* home area start ========================================================================================= */}
            <div className='home'>
                <Container>
                    <div className="home-all-content">
                        <div className='home-left-content' data-aos="zoom-in-up"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="100">
                        <h1>Learn more and make success the result of perfection.</h1>
                        <p>Pick from over 100,000 online video courses with new additions published every month.</p>
                        <InputGroup className="w-100">
                            <FormControl className='input' placeholder="Search Your Favourite Course"aria-label="Search Your Favourite Course"aria-describedby="basic-addon2"/>
                            <Button variant="outline-secondary" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup>
                        </div>

                        <div className='home-right-content pe-5 d-inline-block' data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="100">
                       <img src="http://skilify.theuxuidesigner.com/images/webp/girl-img-study.webp" alt="" />
                       </div>
                      </div>
                </Container>
            </div>
{/* home area end ============================================================================================= */}

{/* partnar area start ============================================================================================= */}

            <div className="partnar-area" style={{backgroundColor:'#0f0f11'}}data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                    <Container>
                        <div className="row align-items-center parnar-area-content" >
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo} alt="" /></div>
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo2} alt="" /></div>
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo3} alt="" /></div>
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo4} alt="" /></div>
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo5} alt="" /></div>
                            <div className="col-lg-2 col-md-3 col-4"><img src={logo6} alt="" /></div>
                        </div>
                    </Container>
                </div>
{/* partnar area end ============================================================================================= */}
{/* home service area start ============================================================================================= */}
        <div className="homeServiceCard">
        <div className="container">
        <div className='service-title'><h1>Our Best  Services</h1></div>
            <Row xs={1} md={3} className="g-5 ">
             {
                 homeServiceCards.map((homeServiceCard)=><HomeServiceCards key={homeServiceCard.id}  homeCard={homeServiceCard} />)
             }
           </Row>
        </div>
    </div>
{/* home service area start ============================================================================================= */}
</div>
);};

export default Home;