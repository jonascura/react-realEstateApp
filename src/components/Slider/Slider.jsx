import React, { useState } from 'react';
import './slider.scss';

// images passed from SinglPage
const Slider = ({ images }) => {

  const [imageIdex, setImageIndex] = useState(null);

  const changeImage = ( direction ) => {
    
    const maxIndex = images.length-1;
    
    // if imageIndex < 0 then arrow button wraps around to maxIndex
    if (direction == "-") {
      if (imageIdex > 0) {
        setImageIndex(imageIdex-1);
      } else {
        setImageIndex(maxIndex);
      }
    }

    // if imageIndex > images.length then arrow button resets from 0th index
    if (direction == "+") {
      if (imageIdex < maxIndex) {
        setImageIndex(imageIdex+1);
      } else {
        setImageIndex(0);
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