import React, { useState } from 'react'
import { Parallax, withController } from 'react-scroll-parallax'
import MediaQuery from 'react-responsive'

import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { Element } from 'react-scroll'

import { data } from './data'

import TechStackWatermark from '../../../static/otherIcons/tech-stack-bg.svg'
import { mobileWidth } from '../../../static/sharedVariables'
import { Stack } from './stack/stack'

interface DesktopStacksProps {
  stackData: Array<{ title: string; body: Array<string> }>
  showApp: boolean
}

const DesktopStacks = ({ stackData, showApp }: DesktopStacksProps) => {
  const stacksRow1 = stackData.slice(0, 3)
  const stacksRow2 = stackData.slice(3)

  return (
    <div className='stack-rows-wrapper'>
      <div className='stack-row-1 stack-row'>
        {stacksRow1.map((stack, i) => (
          <Stack key={i} showApp={showApp} stackData={stack} />
        ))}
      </div>
      <div className='stack-row-2 stack-row'>
        {stacksRow2.map((stack, i) => (
          <Stack key={i} showApp={showApp} stackData={stack} />
        ))}
      </div>
    </div>
  )
}

const MobileStacks = ({ stackData, showApp }: DesktopStacksProps) => (
  <div className='stack-rows-wrapper'>
    {stackData.map((stack, i) => (
      <Stack key={i} showApp={showApp} stackData={stack} />
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
    <Element name='tech-stack-screen'>
      <div
        className={`tech-stack-wrapper section-wrapper ${
          visible && showApp ? 'visible' : 'hidden'
        }`}
      >
        <div className='tech-stack-container section-container'>
          <SectionHeader header='Tech Stack' onVisible={onVisible} />
          <div className='subheader-container'>
            {data.roles.map((role, i) => (
              <p key={i} className='subheader-text'>
                {role}
              </p>
            ))}
          </div>
          <MediaQuery minDeviceWidth={mobileWidth}>
            {(isDesktop) =>
              isDesktop ? (
                <DesktopStacks showApp={showApp} stackData={data.stack} />
              ) : (
                <MobileStacks showApp={showApp} stackData={data.stack} />
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
