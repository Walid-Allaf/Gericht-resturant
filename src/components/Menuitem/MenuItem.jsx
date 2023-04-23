import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title, price, tags}) => {
  return (
    <div className='menuItem'>
      <div className="head">
        <div className="name">
          <p className='p__cormorant' style={{ color: '#dcca87' }}>{ title }</p>
        </div>

        <div className='dash' />

        <div className="price">
          <p className='p__cormorant'>{ price }</p>
        </div>
      </div>
      <div className='sub'>
        <p className="p__opensans" style={{ color: '#aaa' }}>{ tags }</p>
      </div>
    </div>
  )
}

export default MenuItem
