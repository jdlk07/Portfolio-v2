import React from 'react'
import { Element } from 'react-scroll'
import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { data } from './data'
import LinesWithPlanes from '../../generalComponents/backgroundLines/linesWithPlanes/linesWithPlanes'

const About = () => {
  return (
    <Element name='about-screen'>
      <div className='about-wrapper section-wrapper'>
        <div className='about-container section-container'>
          <SectionHeader header={data.header} />
          <div className='body-text-container'>
            <p className='subheader body-text'>{data.subheader}</p>
            <p className='body-text'>{data.body}</p>
          </div>
          <div className='bottom-text-container'>
            <p className='bottom-text-header bottom-text'>
              {data.bottomText.header}
            </p>
            <span className='bottom-text-bar' />
            {data.bottomText.body.map((item, i) => (
              <div className='name-value-container'>
                <p className='bottom-text-name bottom-text'>{item.name}</p>
                <p className='bottom-text-value bottom-text'>{item.value}</p>
              </div>
            ))}
          </div>
          <div className='globe' />
        </div>
        <LinesWithPlanes />
      </div>
    </Element>
  )
}

export default React.memo(About)
