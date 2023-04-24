import React from 'react';
import './Chef.scss';
import { SubHeading } from '../../components';
import { images } from '../../constans';

const Chef = () => {
  return (
    <div className='app-chef app__bg app_wrapper section__padding'>

      <div className="img">
        <img src={ images.chef } alt="chef" />
      </div>
      <div className="info">

        <div>
          <SubHeading title="Chef's World" />
          <h1 className='headtext__cormorant'>What we believe in</h1>
        </div>

        <div className="content">
          <div className="qoute">
            <img src={ images.quote } alt="qoute" />
            <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos, tenetur vel aliquam, dolore ipsam praesentium repellat distinctio facere dolorum id sunt qui odit dolor laborum iure minus officiis! Quos!</p>
        </div>

        <div className="sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={ images.sign } alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef
