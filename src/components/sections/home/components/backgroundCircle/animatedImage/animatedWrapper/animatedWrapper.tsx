import React, { useEffect } from 'react'
// @ts-ignore
import anime from 'animejs/lib/anime.es.js'

const animation = (
  svgClass: string,
  customDuration: number,
  forward: boolean = true
) => {
  const strokeDashoffset = forward
    ? [anime.setDashoffset, 0]
    : [0, anime.setDashoffset]

  const reverseDuration = 800

  const duration = forward ? customDuration : reverseDuration

  const delay = forward ? 50 : 0

  const startDelay = forward ? reverseDuration : 0

  anime({
    targets: `.${svgClass}`,
    strokeDashoffset,
    easing: 'cubicBezier(.36,.5,.85,.92)',
    duration: (el: any, i: any) => duration - i * delay,
    delay: function (el: any, i: any) {
      return i * delay + startDelay
    },
  })
}

interface IsProps {
  active: boolean
  Image: any
  svgClass: string
  duration: number
}

export const AnimatedWrapper = React.memo(
  ({ active, Image, svgClass, duration }: IsProps) => {
    useEffect(() => {
      if (active) {
        animation(svgClass, duration)
      }
    }, [])

    useEffect(() => animation(svgClass, duration, active), [active])

    return (
      <div
        className='animated-image-container'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}
      >
        <Image svgClass={svgClass} />
      </div>
    )
  }
)
