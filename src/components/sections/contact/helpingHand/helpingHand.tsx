import React, { useRef } from 'react'
import { data } from './data'
import MediaQuery from 'react-responsive'
import { mobileWidth } from '../../../../static/sharedVariables'

interface IsProps {
  showFullDescription: boolean
  toggleFullDescription: (show: boolean) => void
}

export const HelpingHand = React.memo(
  ({ showFullDescription = false, toggleFullDescription }: IsProps) => {
    const infoButtonRef = useRef(document.createElement('button'))

    const infoOnClick = () => {
      infoButtonRef.current.blur()
      toggleFullDescription(!showFullDescription)
    }

    return (
      <div
        className={`helping-hand-wrapper${
          showFullDescription ? ' show-full-description' : ''
        }`}
      >
        <MediaQuery maxWidth={mobileWidth}>
          <div className='mobile-overlay-wrapper' />
        </MediaQuery>
        <div className='helping-hand-header-container'>
          <h3 className='helping-hand-header body-text'>{data.header}</h3>
          <button
            className='info-button'
            onClick={infoOnClick}
            ref={infoButtonRef}
          >
            <img
              src={data.closeIcon}
              alt='close'
              className={`info-icon close-icon${
                showFullDescription ? '' : ' hidden'
              }`}
            />
            <img
              src={data.infoIcon}
              alt='more info'
              className={`info-icon show-icon${
                showFullDescription ? ' hidden' : ''
              }`}
            />
          </button>
        </div>
        <div className='body-container'>
          {data.briefDescription.map((paragraph, i) => (
            <p key={i} className='brief-description'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='full-description-container'>
          <p className='brief-description'>{data.fullDescription}</p>
        </div>
      </div>
    )
  }
)
