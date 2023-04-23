import React from 'react';
import { images } from '../../constans';

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem'}}>
      <p className='p__cormorant'>{ title }</p>
      <img src={ images.spoon } alt="spoon" />
    </div>
  )
}

export default SubHeading
