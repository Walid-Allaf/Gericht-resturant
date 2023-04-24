import React from 'react';
import './SpecialMenu.scss';
import { images, data  } from '../../constans';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => {
  return (
    <div className='app-specialMenu flex__center section__padding' id='menu'>
      <div className="title">
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className="menu">

        <div className="wine flex__center">
          <p className='heading'>Wine & Beer</p>
          <div className="menu-items">
            {data.wines.map((wine, index) => (
              <MenuItem key={ wine.title + index } title={ wine.title } price={ wine.price } tags={ wine.tags } />
            ))}
          </div>
        </div>

        <div className="img">
          <img src={ images.menu } alt="menu" />
        </div>

        <div className="cocktails flex__center">
          <p className='heading'>Cocktails</p>
          <div className="menu-items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={ cocktail.title + index } title={ cocktail.title } price={ cocktail.price } tags={ cocktail.tags } />
            ))}
          </div>
        </div>

      </div>

      <div style={{marginTop: '1rem'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu
