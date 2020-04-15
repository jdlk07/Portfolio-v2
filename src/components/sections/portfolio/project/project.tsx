import React, { useState } from 'react'

import ExternalLinkIcon from '../../../../static/otherIcons/external-link.svg'

interface IsProps {
  data: {
    type: string
    image: string
    className: string
    title: string
    description: string
    link: { text: string; link?: string }
  }
}

export const Project = React.memo(({ data }: IsProps) => {
  const [showFullDescription, setFullDescription] = useState(false)

  const toggleFullDescription = () => setFullDescription(!showFullDescription)

  return (
    <div className='project-wrapper'>
      <div className='project-header-container reveal-lines'>
        <h3 className='body-text project-type-text'>{data.type}</h3>
      </div>
      <div className='project-container' onClick={toggleFullDescription}>
        <div className='project-image-wrapper'>
          <div className='project-image-container'>
            <img src={data.image} alt={data.title} className='project-image' />
          </div>
        </div>
      </div>
      <div className='project-title-container reveal-lines'>
        <h3 className='body-text project-title-text'>{data.title}</h3>
      </div>
      <div className='project-body-text-container reveal-lines'>
        <p className='body-text project-body-text'>{data.description}</p>
        <a
          href={data.link.link}
          target='_blank'
          rel='noopener noreferrer'
          className='link-to-project'
        >
          {data.link.text}
          {data.link.link ? (
            <img
              src={ExternalLinkIcon}
              alt='external link'
              className='external-link-icon'
            />
          ) : null}
        </a>
      </div>
    </div>
  )
})
