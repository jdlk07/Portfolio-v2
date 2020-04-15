import React, { useState } from 'react'

import InfoIcon from '../../../../static/otherIcons/info.svg'

interface IsProps {
  data: {
    type: string
    image: string
    className: string
    title: string
    description: string
  }
}

export const Project = React.memo(({ data }: IsProps) => {
  const [showFullDescription, setFullDescription] = useState(false)

  const toggleFullDescription = () => setFullDescription(!showFullDescription)

  return (
    <div className='project-wrapper'>
      <div className='project-type-header-container'>
        <h2 className='project-type-header header'>{data.type}</h2>
      </div>
      <div className={`project-container ${data.className}`}>
        <img
          src={data.image}
          alt={`${data.title} screenshot`}
          className='project-image'
        />
        <div className='project-title-container'>
          <h2 className='project-header body-text'>{data.title}</h2>
          {/* <p className='project-body-text body-text'>{data.description}</p> */}
        </div>
        <div
          className={`description-container ${
            showFullDescription ? 'visible' : 'hidden'
          }`}
        >
          <div
            className='description-icon-button'
            onClick={toggleFullDescription}
          >
            <img
              src={InfoIcon}
              alt='show description'
              className='description-icon'
            />
          </div>
        </div>
      </div>
    </div>
  )
})
