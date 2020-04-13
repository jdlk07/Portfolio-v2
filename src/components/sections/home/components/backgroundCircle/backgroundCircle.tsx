import React from 'react'
import MediaQuery from 'react-responsive'
import { mobileWidth } from '../../../../../static/sharedVariables'
import { AnimatedImages } from './animatedImage/animatedImages'

interface CircleProps {
  activeIndex: number
}

const BackgroundCircle = ({ activeIndex }: CircleProps) => {
  return (
    <div className='background-circle-wrapper'>
      <div className='outer-circle'></div>
      <div className='inner-circle'>
        <MediaQuery minDeviceWidth={mobileWidth}>
          <div className='image-container'>
            {/* <img src={images[0]} alt='react-logo' /> */}
            <AnimatedImages activeIndex={activeIndex} />
          </div>
        </MediaQuery>
      </div>
    </div>
  )
}

export default React.memo(BackgroundCircle)
