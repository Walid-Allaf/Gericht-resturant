import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constans/images';
import './Navbar.scss';

const Menu = () => {
  return (
    <>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
  </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='app-navbar'>
      <div className='logo'>
        <img src={ images.gericht } alt="logo" />
      </div>
      <ul className="links">
        <Menu />
      </ul>
      <div className="login">
        <a href="#login" className='p__opensans'>Log in / registration</a>
        < div />
        <a href="/" className='p__opensans'>book table</a>
      </div>
      <div className="smallscreen">
        <GiHamburgerMenu color='#fff' cursor={'pointer'} fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="overlay flex__center slid">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
            <ul className="links">
              <Menu />
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

