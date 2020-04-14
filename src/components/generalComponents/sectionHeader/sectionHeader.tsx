import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

interface IsProps {
  header: String
  onVisible: (name: string) => void
}

const SectionHeader = ({ header, onVisible }: IsProps) => {
  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      onVisible(header.toLowerCase())
    }
  }

  return (
    <ReactVisibilitySensor
      partialVisibility
      offset={{ bottom: 10 }}
      onChange={onVisibilityChange}
    >
      <div className='section-header-wrapper'>
        <span className='header-bar' />
        <h2 className='section-header-text header'>{header}</h2>
      </div>
    </ReactVisibilitySensor>
  )
}

export default SectionHeader
