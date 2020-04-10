import React from 'react'

import InfoIcon from '../../../../static/otherIcons/info.svg'

interface IsProps {
  data: {
    type: string
    image: string
    title: string
    description: string
  }
}

export const Project = React.memo(({ data }: IsProps) => {
  return (
    <div className='project-wrapper'>
      <div className='project-type-header-container'>
        <h2 className='project-type-header header'>{data.type}</h2>
      </div>
      <div className='project-container'>
        <img
          src={data.image}
          alt='winfield sports screenshot'
          className='project-image'
        />
        <div className='project-title-container'>
          <h2 className='project-header body-text'>{data.title}</h2>
          {/* <p className='project-body-text body-text'>{data.description}</p> */}
        </div>
        <div className='description-container'>
          <div className='description-icon-button'>
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
