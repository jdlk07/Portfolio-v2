import React from 'react'

interface IsProps {
  header: String
}

const SectionHeader = ({ header }: IsProps) => (
  <div className='section-header-wrapper'>
    <span className='header-bar' />
    <h2 className='section-header-text header'>{header}</h2>
  </div>
)

export default SectionHeader
