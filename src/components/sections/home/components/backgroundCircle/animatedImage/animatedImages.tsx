import React, { useEffect, useState } from 'react'
import { ReactImage } from './images/reactImage'
import { FullStackImage } from './images/fullstackImage'
import { AppImage } from './images/appImage'
import { AnimatedWrapper } from './animatedWrapper/animatedWrapper'
import { WebImage } from './images/webImage'

const images = [
  {
    image: FullStackImage,
    svgClass: 'stackImage',
    duration: 2000,
  },
  {
    image: ReactImage,
    svgClass: 'reactImage',
    duration: 1500,
  },
  {
    image: WebImage,
    svgClass: 'webImage',
    duration: 2000,
  },
  {
    image: AppImage,
    svgClass: 'appImage',
    duration: 1000,
  },
]

export const AnimatedImages = React.memo(
  ({ activeIndex }: { activeIndex: number }) => {
    return (
      <div
        className='animated-images-wrapper'
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        {images.map((item, i) => (
          <AnimatedWrapper
            active={i === activeIndex}
            Image={item.image}
            svgClass={item.svgClass}
            duration={item.duration}
          />
        ))}
      </div>
    )
  }
)
