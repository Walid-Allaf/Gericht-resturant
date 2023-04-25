import React from 'react';
import './FindUs.scss';
import { images } from '../../constans';
import { SubHeading } from '../../components';

const FindUs = () => {
  return (
    <div className='app-findus app__bg app__wrapper section__padding' id='contact'>
      <div className='info'>
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className="content">
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <p className='p__cormorant' style={{ color: '#dcca87', margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button'>Visit Us</button>
      </div>
      <div className="img">
        <img src={ images.findus } alt="findUs" />
      </div>
    </div>
  )
}

export default FindUs
