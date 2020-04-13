import React from 'react'

export const FullStackImage = ({ svgClass }) => (
  <svg
    version='1.1'
    viewBox='0 0 1000 1000'
    // style={{ fill: 'none', stroke: '#0a6ce0', strokeWidth: '5px' }}
  >
    <g>
      <path
        class={svgClass}
        d='M990,348.2l-490-245l-490,245l490,245L990,348.2L990,348.2z M500,150.5l395.2,197.6L500,545.8L104.8,348.2L500,150.5L500,150.5z M871.2,492.8l24.1,12L500,702.5L104.8,504.8l24.1-12l-47.4-23.7L10,504.8l490,245l490-245l-71.4-35.7L871.2,492.8z M871.2,639.8l24.1,12L500,849.5L104.8,651.8l24.1-12l-47.4-23.7L10,651.8l490,245l490-245l-71.4-35.7L871.2,639.8z'
        fill='none'
        stroke='#0a6ce0'
        strokeWidth='12px'
      />
    </g>
  </svg>
)
