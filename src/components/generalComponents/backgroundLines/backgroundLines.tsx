import React from 'react'

const Line = () => (
  <div className='background-line-container'>
    <div className='background-line'>
      <span className='background-line-slider' />
    </div>
  </div>
)

const BackgroundLines = ({}) => {
  return (
    <div className='background-lines-wrapper'>
      <div className='background-container'>
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    </div>
  )
}

export default BackgroundLines
