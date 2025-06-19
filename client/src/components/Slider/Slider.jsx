import React, { useState } from 'react';
import './slider.scss';

// images passed from SinglPage
const Slider = ({ images }) => {

  const [imageIdex, setImageIndex] = useState(null);

  const changeImage = ( direction ) => {
    
    if (direction === "-") {
      // if imageIndex < 0 then arrow button wraps around to maxIndex
      if (imageIdex > 0) {
        setImageIndex(imageIdex-1);
      } else {
        setImageIndex(images.length-1);
      }  
    } else if (direction === "+") {
      if (imageIdex === images.length-1) {
        // if imageIndex > images.length then arrow button resets to 0th index
        setImageIndex(0);
      } else {
        setImageIndex(imageIdex+1);
      }
    }
  }

  return (
    <div className='slider'>
      
      {imageIdex!== null && ( 
        <div className="fullSlider">
          <div className="arrow">
            <img 
              src="/arrow.png" 
              alt="" 
              onClick={() => changeImage("-")} 
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIdex]} alt="" />
          </div>
          <div className="arrow">
            <img 
              src="/arrow.png" 
              className='right' 
              alt="" 
              onClick={() => changeImage("+")} />
          </div>
          {/* close modal */}
          <div className="close" onClick={() => setImageIndex(null)}>X</div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)}/>
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img 
            src={image} 
            alt="" 
            key={index} 
            onClick={() => setImageIndex(index+1)} // +1 since 0th index was sliced
          />
        ))}
      </div>
    </div>
  )
}

export default Slider