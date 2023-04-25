import React, { useRef } from 'react';
import './Gallery.scss';
import { images } from '../../constans';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = ( direction ) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app-gallery flex__center'>
        <div className='content'>
          <SubHeading title='Instagram' />
          <h1 className='headtext__cormorant'>Photo Gallery</h1>
          <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type='button' className='custom__button'>View More</button>
        </div>

        <div className='images'>
          <div className='images-container' ref={ scrollRef }>
          {galleryImages.map((image, index) => (
              
              <div className='image-card flex__center' key={`gallery_image${index + 1}`}>
                <img src={ image } alt='gallery' />
                <BsInstagram className='image-icon' />
              </div>
            
          ))}
          </div>

          <div className='arrows'>
            <BsArrowLeftShort className='arrow-icon' onClick={() => scroll('left')} />
            <BsArrowRightShort className='arrow-icon' onClick={() => scroll('right')} />
          </div>

        </div>
    </div>
  )
}

export default Gallery
