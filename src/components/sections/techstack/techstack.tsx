import React from 'react'
import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { data } from './data'

import TechStackWatermark from '../../../static/otherIcons/tech-stack-bg.svg'
import MediaQuery, { useMediaQuery } from 'react-responsive'
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

export const TechStack = React.memo(() => {
  const isDesktop = useMediaQuery({ query: `(min-width: ${mobileWidth})` })

  console.log(isDesktop)

  return (
    <div className='tech-stack-wrapper section-wrapper'>
      <div className='tech-stack-container section-container'>
        <SectionHeader header='Tech Stack' />
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
          <img
            src={TechStackWatermark}
            alt='tech-stack-watermark'
            className='tech-stack-watermark'
          />
        </div>
      </div>
    </div>
  )
})
