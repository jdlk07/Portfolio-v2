import React from 'react'

export const LinesWithCircles = React.memo(() => (
  <div className='lines-with-circles-wrapper'>
    <span className='circle' />
    <span className='circle' />
    <span className='circle' />
    <span className='line' />
  </div>
))
