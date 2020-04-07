import React from 'react'

const Line = () => (
  <div className='background-line-container'>
    <div className='background-line'>
      <span className='background-line-slider' />
    </div>
  </div>
)

const VerticalBackgroundLines = () => {
  return (
    <div className='vertical-background-lines-wrapper'>
      <div className='background-container'>
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    </div>
  )
}

export default VerticalBackgroundLines
