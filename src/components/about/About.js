import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div>
{/* About-background ==================================================================================*/}
            <div className='About-background'>
            <div style={{textAlign:'center'}}>
             <h1 style={{color:'white'}}>About</h1>
            <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "gold"}}><button className='btn'>back</button></NavLink>
            </div>
            </div>
{/* about discription =================================================================================*/}
            <div className="about-discription">
            <Container>
           <div className="about-discription-all-content">
               <div className="about-left-content"data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
{/* about title ========================================================================================*/}
                   <div className='education-title'data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                       <h2>
                           <img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/60/000000/external-global-education-online-learning-kiranshastry-lineal-color-kiranshastry.png"/> 
                           Skilify 
                           <img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/60/000000/external-global-education-online-learning-kiranshastry-lineal-color-kiranshastry.png"/>
                    </h2></div>
{/* about details ==============================================================*/}
{/* PRINCIPAL-NAME====================================================================================== */}
            <div className='PRINCIPAL-NAME'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                <h2>Joseph White</h2>
                <h5>principal of skilify online education</h5>
            </div>
{/* education============================================================================================ */}
                <div className='education'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                <h3><img alt='' src="https://img.icons8.com/external-wanicon-flat-wanicon/60/000000/external-education-university-courses-wanicon-flat-wanicon.png"/>Education</h3>
                <p>Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed</p>
                </div>
{/* catagory =============================================================================================*/}
                        <div className='catgory'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                        <h6><img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/> We Enrich Lives Through Learning.</h6>
                        <h6><img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/> Guiding the young generation to success.</h6>
                        <h6><img alt='' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/35/000000/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/> Learn to Play, Converse with Confidence.</h6>
                        </div>
{/* Experience ============================================================================================*/}
                    <div className='Experience'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                        <h3><img alt='' src="https://img.icons8.com/color/50/000000/internship.png"/> Experience</h3>
                        <p>Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed</p>
                    </div>
{/* our Skills =============================================================================================*/}
                        <div className='Skills'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                            <h3><img alt='' src="https://img.icons8.com/external-itim2101-flat-itim2101/50/000000/external-skill-teamwork-itim2101-flat-itim2101-1.png"/> Our Skills</h3>
                           <p> Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed.</p>
                        </div>

               </div>
{/* about-right-content======================================================================================*/}
               <div className="about-right-content"data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                  <img width='300px' className='right-content-img' src="https://www.bradfordcollege.ac.uk/help/wp-content/uploads/sites/107/2020/04/Graduation2019-10-1024x683.jpg" alt="" />
               <div className='right-content-discription'>
               <h2><img alt='' src="https://img.icons8.com/flat-round/40/000000/medal--v1.png"/> Our achievements</h2>
               <p>SKLIFY Education is the best online school education platform in Asia in 2019-20.</p>
                 <h3><img alt='' src="https://img.icons8.com/fluency/40/000000/training.png"/> Education introduction</h3>
                <p>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
               </div>
               </div>
           </div>
             </Container>
            </div>


        </div>
    );
};

export default About;