import React from 'react'
import MediaQuery from 'react-responsive'
import { mobileWidth } from '../../../../../static/sharedVariables'

interface CircleProps {
  images: Array<string>
}

const BackgroundCircle = ({ images }: CircleProps) => {
  return (
    <div className='background-circle-wrapper'>
      <div className='outer-circle'></div>
      <div className='inner-circle'>
        <MediaQuery minDeviceWidth={mobileWidth}>
          <div className='image-container'>
            <img src={images[0]} alt='react-logo' />
          </div>
        </MediaQuery>
      </div>
    </div>
  )
}

export default BackgroundCircle
