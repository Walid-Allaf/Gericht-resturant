import React from 'react';
import './AboutUs.scss';
import { images } from '../../constans';
import { SubHeading } from '../../components';

const AboutUs = () => {
  return (
    <div className='app-aboutus app__bg flex__center section__padding' id='about'>
      <div className="overlay flex__center">
        <img src={ images.G } alt="G" />
      </div>
      <div className="content flex__center">
        <div className="about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={ images.spoon } alt="spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aperiam mollitia nisi alias harum officiis numquam molestiae cumque? Autem omnis similique voluptatem delectus possimus facilis iste voluptate, eaque temporibus velit?</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className="knife flex__center">
          <img src={ images.knife } alt="knife" />
        </div>
        <div className="history">
          <h1 className='headtext__cormorant'>History</h1>
          <img src={ images.spoon } alt="spoon" className='spoon__img' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio aperiam mollitia nisi alias harum officiis numquam molestiae cumque? Autem omnis similique voluptatem delectus possimus facilis iste voluptate, eaque temporibus velit?</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
