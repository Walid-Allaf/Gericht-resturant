import React from 'react';
import './Footer.scss';
import { images } from '../../constans';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';


const Footer = () => {
  return (
    <div className='app-footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="links">
        <div className="contact">
          <h1 className="headtext">Contact Us</h1>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230</p>
          <p className='p__opensans'>+1 212-555-1230</p>

        </div>
        <div className="logo">
          <img src={ images.gericht } alt="logo" />
          <div className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</div>
          <img src={ images.spoon } alt="spoon" style={{ marginTop: '15px'}} />
          <div className="social">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="work">
        <h1 className="headtext">Working Hours</h1>
          <p className='p__opensans'>Monday-Friday:</p>
          <p className='p__opensans'>08:00 am -12:00 am</p>
          <p className='p__opensans'>Saturday-Sunday:</p>
          <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="copyright">
        <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
