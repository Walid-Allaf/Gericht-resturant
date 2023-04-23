import React from 'react';
import './Header.scss';
import { SubHeading } from '../../components';
import { images } from '../../constans';

const Header = () => {
  return (
    <div className='app-header app__wrapper section__padding' id='home' >
      <div className="info">
        <SubHeading title='Chase the new flavour' />
        <h1 className='title'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eos debitis repellendus iste excepturi non odio, saepe temporibus, architecto amet eveniet perspiciatis quos dolorum esse ducimus ea tempora? Ea, earum.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="img">
        <img src={ images.welcome } alt="welcome" />
      </div>
    </div>
  )
}

export default Header
