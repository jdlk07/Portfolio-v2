import React, { useState } from 'react'
import { Project } from './project/project'
import { Element } from 'react-scroll'
import { data } from './data'
import { LinesWithCircles } from '../../generalComponents/backgroundLines/linesWithCircles/linesWithCircles'
import ReactVisibilitySensor from 'react-visibility-sensor'

interface IsProps {
  setActiveSection: (section: string) => void
  showApp: boolean
}

const Portfolio = ({ setActiveSection, showApp }: IsProps) => {
  const [visible, changeVisibilityState] = useState(false)

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      changeVisibilityState(isVisible)
      setActiveSection('portfolio')
    }
  }

  return (
    <Element name='portfolio-screen'>
      <div className='portfolio-wrapper section-wrapper'>
        <div
          className={`portfolio-container section-container ${
            visible && showApp ? 'visible' : 'hidden'
          }`}
        >
          <ReactVisibilitySensor
            partialVisibility
            onChange={onVisibilityChange}
          >
            <div className='header-container reveal-lines'>
              <h2 className='header'>Portfolio</h2>
            </div>
          </ReactVisibilitySensor>
          <div className='projects-wrapper'>
            {data.projects.map((project, i) => (
              <Project data={project} />
            ))}
          </div>
        </div>
        {/* <LinesWithCircles /> */}
      </div>
    </Element>
  )
}
export default React.memo(Portfolio)
