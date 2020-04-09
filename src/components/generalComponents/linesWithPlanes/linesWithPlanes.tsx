import React from 'react'

import PlaneImage from '../../../static/images/plane.svg'

const LineAndPlane = () => (
  <div className='line-container'>
    <span className='line' />
    <img src={PlaneImage} alt='plane' className='plane' />
  </div>
)

const LinesWithPlanes = () => (
  <div className='lines-with-planes-wrapper'>
    <LineAndPlane />
    <LineAndPlane />
  </div>
)

export default React.memo(LinesWithPlanes)
