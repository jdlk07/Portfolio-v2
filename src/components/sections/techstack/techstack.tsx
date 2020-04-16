import React, { useState } from 'react'
import { Parallax, withController } from 'react-scroll-parallax'
import MediaQuery from 'react-responsive'

import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { Element } from 'react-scroll'

import { data } from './data'

import TechStackWatermark from '../../../static/otherIcons/tech-stack-bg.svg'
import { mobileWidth } from '../../../static/sharedVariables'

interface StackProps {
  stackData: {
    title: string
    body: Array<string>
  }
}

const Stack = ({ stackData }: StackProps) => (
  <div className='stack-container'>
    <h2 className='stack-header'>{stackData.title}</h2>
    <span className='seperator-line' />
    <ul className='stack-body-list-container'>
      {stackData.body.map((item) => (
        <li className='stack-list-item body-text'>{item}</li>
      ))}
    </ul>
  </div>
)

interface DesktopStacksProps {
  stackData: Array<{ title: string; body: Array<string> }>
}

const DesktopStacks = ({ stackData }: DesktopStacksProps) => {
  const stacksRow1 = stackData.slice(0, 3)
  const stacksRow2 = stackData.slice(3)

  return (
    <div className='stack-rows-wrapper'>
      <div className='stack-row-1 stack-row'>
        {stacksRow1.map((stack) => (
          <Stack stackData={stack} />
        ))}
      </div>
      <div className='stack-row-2 stack-row'>
        {stacksRow2.map((stack) => (
          <Stack stackData={stack} />
        ))}
      </div>
    </div>
  )
}

const MobileStacks = ({ stackData }: DesktopStacksProps) => (
  <div className='stack-rows-wrapper'>
    {stackData.map((stack) => (
      <Stack stackData={stack} />
    ))}
  </div>
)

interface IsProps {
  parallaxController: any
  setActiveSection: (section: string) => void
  showApp: boolean
}

const _TechStack = ({
  parallaxController,
  setActiveSection,
  showApp,
}: IsProps) => {
  const [visible, setVisibility] = useState(false)

  const onVisible = (isVisible: boolean) => {
    if (isVisible) {
      setVisibility(isVisible)
      setActiveSection('tech stack')
    }
  }

  const updateParallaxController = () => parallaxController.update()

  return (
    <Element
      name={`tech-stack-screen ${visible && showApp ? 'visible' : 'hidden'}`}
    >
      <div className='tech-stack-wrapper section-wrapper'>
        <div className='tech-stack-container section-container'>
          <SectionHeader header='Tech Stack' onVisible={onVisible} />
          <div className='subheader-container'>
            {data.roles.map((role) => (
              <p className='subheader-text'>{role}</p>
            ))}
          </div>
          <MediaQuery minDeviceWidth={mobileWidth}>
            {(isDesktop) =>
              isDesktop ? (
                <DesktopStacks stackData={data.stack} />
              ) : (
                <MobileStacks stackData={data.stack} />
              )
            }
          </MediaQuery>
          <div className='tech-stack-watermark-container'>
            <Parallax y={[-10, 10]} tagOuter='figure'>
              <img
                src={TechStackWatermark}
                alt='tech-stack-watermark'
                className='tech-stack-watermark'
                onLoad={updateParallaxController}
              />
            </Parallax>
          </div>
        </div>
      </div>
    </Element>
  )
}

const WithScrollParallaxController = withController(_TechStack)

export const TechStack = React.memo(WithScrollParallaxController)
