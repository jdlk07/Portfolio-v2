import React, { useState } from 'react'
import SectionHeader from '../../generalComponents/sectionHeader/sectionHeader'
import { data } from './data'
import { HelpingHand } from './helpingHand/helpingHand'

export const Contact = () => {
  const [showFullDescription, toggleFullDescription] = useState(false)

  const backdropOnClick = () => {
    if (showFullDescription) {
      toggleFullDescription(false)
    }
  }

  return (
    <div className='contact-wrapper section-wrapper' onClick={backdropOnClick}>
      <div className='contact-container section-container'>
        <SectionHeader header={data.header} />
        <p className='body-text'>{data.body}</p>
        <div className='contact-links-wrapper'>
          <a
            href={data.email.link}
            target='_blank'
            rel='noopener noreferrer'
            className='email-link'
          >
            {data.email.name}
          </a>
          <div className='contact-links-container'>
            {data.contactLinks.map((contact, i) => (
              <a
                key={i}
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
                className='contact-link'
              >
                <div className='link-icon-container'>
                  <img
                    src={contact.colorIcon}
                    alt={contact.name}
                    className='link-icon'
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <HelpingHand
        showFullDescription={showFullDescription}
        toggleFullDescription={toggleFullDescription}
      />
    </div>
  )
}
