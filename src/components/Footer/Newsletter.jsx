import React from 'react';
import './NewsLetter.scss';
import { SubHeading } from '../../components';

const Newsletter = () => {
  return (
    <div className='app-newsletter'>

      <div className="heading">
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>

      <div className="input flex__center">
        <input type="email" name="" id="" placeholder='Enter Your Email Address' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
