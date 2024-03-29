import React, { useRef, useState } from 'react';
import './Intro.scss';
import { meal } from '../../constans';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app-intro'>
      <video 
        src={ meal }
        ref={ vidRef }
        type='video/mp4'
        loop
        controls={ false }
        muted
      />
      <div className='overlay flex__center'>
        <div className='circle flex__center' onClick={ handleVideo }>
        {playVideo
        ? <BsPauseFill color='#fff' fontSize={30} />
        : <BsFillPlayFill color='#fff' fontSize={30} />
        }
        </div>
      </div>
    </div>
  )
}

export default Intro
