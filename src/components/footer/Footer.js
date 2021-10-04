import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
<footer data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="700">
  
  {/*  footer top start */}
  <div className="footer-top">
    <div className="container">
      <div className="row gy-5 text-lg-start text-md-start text-center text-white">
        <div className="col-lg-3 col-md-6 col-12">
          <div>
            <h3>Skilify</h3>
            <p>102 lokman hosen road<br />narsingdi, NY 535022 <br />bangladesh</p>
          </div>
        <div>
          <p>Phone: +8801725502623 <br /> Email:khannirub55@gmail.com </p>
        </div>
        </div>
  
            <div className="col-lg-3 col-md-6 col-12">
           <h5>Useful Links</h5>
            <ul className="navbar-nav text-white"> 
              <li> <a className="text-white"  href="/home" ><i className="fas fa-angle-right"></i>home</a></li>
              <li> <a className="text-white" href="/about" ><i className="fas fa-angle-right"></i>about us</a></li>
              <li> <a className="text-white"href="/service"><i className="fas fa-angle-right"></i>service</a></li>
              <li> <a className="text-white" href="/contact"><i className="fas fa-angle-right"></i>contact</a></li>
              <li> <a className="text-white"href="/peivesi"><i className="fas fa-angle-right"></i>privaci policy</a></li>
            </ul>
              </div>
        <div className="col-lg-3 col-md-6 col-12">
           <h5>Our Services</h5>
            <ul className="navbar-nav"> 
              <li><a className="text-white" href="/home" ><i className="fas fa-angle-right"></i>Service Schedule</a></li>
              <li><a className="text-white" href="/about" ><i className="fas fa-angle-right"></i>Standard Warranty</a></li>
              <li><a className="text-white" href="/service"><i className="fas fa-angle-right"></i>Service Training</a></li>
              <li><a className="text-white" href="/contact"><i className="fas fa-angle-right"></i>Marketing</a></li>
              <li><a className="text-white" href="/peivesi"><i className="fas fa-angle-right"></i>Service Campaign</a></li>
            </ul>
             </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h5>Our Social Networks</h5>
      <div>
        <p className="pb-2">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
      </div>
  <div id="sosial-icon">
    <a   href="/twitter" ><img alt='' src="https://img.icons8.com/color/40/000000/twitter--v1.png"/></a>
    <a   href="/facebook" ><img alt='' src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/></a>
    <a   href="/instagram"><img alt='' src="https://img.icons8.com/fluency/40/000000/facebook-new.png"/></a>
    <a  href="/google"><img alt='' src="https://img.icons8.com/fluency/40/000000/google-logo.png"/></a>
    <a  href="/linkedin"><img alt='' src="https://img.icons8.com/fluency/40/000000/linkedin.png"/></a>
  </div>
  </div>
  </div>
  </div>
  </div>
  {/*  footer top end */}
  {/*  footer bottom start */}
  <div className="footer-bottom">
    <div className="container d-flex align-items-center justify-content-between">
      <div>
        <p>© Copyright Arsha. All Rights ReservedDesigned by BootstrapMade</p>
      </div>
      <div>
        <p>Designed by <span>Amanullah nirub</span></p>
      </div>
    </div>
  </div>
  {/*  footer bottom end */}
  </footer>
</div>
    );
};

export default Footer;