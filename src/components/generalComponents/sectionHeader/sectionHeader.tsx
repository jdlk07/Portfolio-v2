import React from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

interface IsProps {
  header: String
  onVisible: (isVisible: boolean) => void
}

const SectionHeader = ({ header, onVisible }: IsProps) => {
  const onVisibilityChange = (isVisible: boolean) => {
    onVisible(isVisible)
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
