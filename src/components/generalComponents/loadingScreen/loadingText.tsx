import React, { useRef, useEffect } from 'react'
import { TimelineLite } from 'gsap'

interface IsProps {
  textArray: Array<string>
  onTextAnimatingComplete: () => void
}

export const LoadingText = React.memo(
  ({ textArray, onTextAnimatingComplete }: IsProps) => {
    let textItemsRefs = useRef(new Array(textArray.length))
    const tl = useRef(
      new TimelineLite({
        delay: 1,
        paused: true,
      })
    )

    useEffect(() => {
      textItemsRefs.current.map((ref, i, { length }) => {
        tl.current.from(ref, {
          duration: 0.3,
          y: '-100%',
          ease: 'power4.out',
          delay: i !== 1 ? 0.1 : 0,
        })
        if (i !== length - 1) {
          tl.current.to(ref, {
            duration: 0.3,
            y: '100%',
            ease: 'power4.in',
            delay: 0.5,
          })
        } else {
          tl.current.add(onTextAnimatingComplete, '+=1')
        }
      })
      tl.current.play()
    }, [])

    return (
      <div className='loading-text-viewbox'>
        {textArray.map((text, i) => (
          <div
            key={text}
            className='loading-text-container'
            ref={(elem) => {
              textItemsRefs.current[i] = elem
            }}
          >
            <h2 className='loading-text header'>{text}</h2>
          </div>
        ))}
      </div>
    )
  }
)
