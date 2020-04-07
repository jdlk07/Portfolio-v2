import React from 'react'

interface CircleProps {
  images: Array<string>
}

const BackgroundCircle = ({ images }: CircleProps) => {
  return (
    <div className='background-circle-wrapper'>
      <div className='outer-circle'></div>
      <div className='inner-circle'>
        <div className='image-container'>
          <img src={images[0]} alt='react-logo' />
        </div>
      </div>
    </div>
  )
}

export default BackgroundCircle
