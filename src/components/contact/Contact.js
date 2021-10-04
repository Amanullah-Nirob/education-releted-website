import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ContactTitle } from '../../App';
import './Contact.css'
const Contact = () => {
const contactitle=useContext(ContactTitle)
    return (
        <div>
<div className='google-maps-location'>
<iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12267.380755255113!2d90.70406006420842!3d23.921012721725674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375431b2e3f50b71%3A0xda2c4a9fea023df!2sNarsingdi%20Govt.%20Girls&#39;%20High%20School!5e0!3m2!1sen!2sbd!4v1633325413985!5m2!1sen!2sbd" className='google-map' allowfullscreen="" loading="lazy"></iframe>
</div>

<div className='contact'>
    <Container>
        <h1 className='contact-title'>{contactitle}</h1>
        <div className="contact-all-content row">
            <div className="col-lg-6 col-md-12 col-12 contact-left-content" data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                <h1 className='mb-4'>Contact Details</h1>
                <p className='mb-5'>If you want to contact us, you can email us at the number given below or by email. Or you can contact us directly at our office. Below are the email and phone numbers and addresses.Thank you</p>
                <div className='main-office mb-5'>
                <h5>Dhaka Office</h5>
                <p><img alt='' src="https://img.icons8.com/color/25/000000/apple-phone.png"/> +8801725502623</p>
                <p><img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/25/000000/external-email-social-media-basic-1-sbts2018-flat-sbts2018.png" alt=''/> khannirub55@gmail.com</p>
                <p><img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/25/000000/external-location-coronavirus-flatart-icons-flat-flatarticons.png" alt=''/> dhanmondi 15,dhaka bangladesh</p>
                </div>
                <hr />
                <div className='branch-office mt-5'>
                <h5>Narsingdi Office</h5>
                <p><img alt='' src="https://img.icons8.com/color/25/000000/apple-phone.png"/> +8801739836982</p>
                <p><img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/25/000000/external-email-social-media-basic-1-sbts2018-flat-sbts2018.png" alt=''/> webapplication150@gmail.com</p>
                <p> <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/25/000000/external-location-coronavirus-flatart-icons-flat-flatarticons.png" alt=''/> narsingdi, NY 535022,dhaka bangladesh</p>
                </div>
            
            </div>
            <div className="col-lg-6 col-md-12 col-12" id="contact-right-form" data-aos="zoom-in-down"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
          <form action="" className="form text-muted">
          <div className="row mb-4">
          <div className="col-lg-6 col-md-6 col-12 form-group">
          <label>Your name</label>
          <input type="name" className="form-control"/>
          </div>
          <div className="col-lg-6 col-md-6 col-12 form-group">
          <label>your email</label>
          <input type="email" className="form-control"/>
          </div>
          </div>
          
          <div className="form-group">
            <label>subject</label>
          <input type="name" className="form-control"/>
          </div>
          <div className="form-group my-4">
            <label>massage</label>
          <textarea name="massage" cols="30" rows="10" className="form-control"></textarea>
          </div>
          
          <button className="form-button">get started</button>
          </form>
       
           </div>
        </div>

</Container>
</div>
</div>






)};

export default Contact;