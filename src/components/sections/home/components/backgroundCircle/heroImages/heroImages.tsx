import React from 'react'

import ReactLogo from '../../../../../../static/heroImages/react-logo.svg'
import FullStackImage from '../../../../../../static/heroImages/tech-stack.svg'
import WebImage from '../../../../../../static/heroImages/web.png'
import AppImage from '../../../../../../static/heroImages/app.svg'

const images = [
  {
    image: FullStackImage,
    name: 'Full Stack',
  },
  {
    image: ReactLogo,
    name: 'React',
  },
  {
    image: WebImage,
    name: 'Web',
  },
  {
    image: AppImage,
    name: 'Mobile App',
  },
]

interface IsProps {
  activeIndex: number
}

export const HeroImages = ({ activeIndex }: IsProps) => {
  return (
    <div className='hero-image-container'>
      {images.map((image, i) => (
        <img
          key={image.name}
          src={image.image}
          alt={image.name}
          className={`hero-image ${activeIndex === i ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}
