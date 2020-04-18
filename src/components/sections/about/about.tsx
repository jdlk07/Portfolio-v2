import React, { useState } from 'react'
import { Element } from 'react-scroll'
import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { data } from './data'
import LinesWithPlanes from '../../generalComponents/backgroundLines/linesWithPlanes/linesWithPlanes'

interface IsProps {
  setActiveSection: (section: string) => void
  showApp: boolean
}

const About = ({ setActiveSection, showApp }: IsProps) => {
  const [visible, setVisibility] = useState(false)

  const onVisible = (isVisible: boolean) => {
    if (isVisible) {
      setVisibility(isVisible)
      setActiveSection(data.header.toLowerCase())
    }
  }

  return (
    <Element name='about-screen'>
      <div
        className={`about-wrapper section-wrapper ${
          visible && showApp ? 'visible' : 'hidden'
        }`}
      >
        <div className='about-container section-container'>
          <SectionHeader header={data.header} onVisible={onVisible} />
          <div className='body-text-container'>
            <p className='subheader body-text'>{data.subheader}</p>
            <p className='main-body-text body-text'>{data.body[0]}</p>
            <p className='main-body-text body-text'>{data.body[1]}</p>
          </div>
          <div className='bottom-text-container'>
            <p className='bottom-text-header bottom-text'>
              {data.bottomText.header}
            </p>
            <span className='bottom-text-bar' />
            {data.bottomText.body.map((item, i) => (
              <div key={i} className={`name-value-container container-${i}`}>
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
