import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className='Tilt br2 shadow-2' tiltMaxAngleX={55} tiltMaxAngleY={55}>
          <img style={{paddingTop: '25px'}} src="https://github.com/aneagoie/face-recognition-brain/blob/master/src/components/Logo/brain.png?raw=true" alt="" />
      </Tilt>
    </div>
  );
}
 
export default Logo