import React, { useState, useRef, useEffect } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { TimelineLite } from 'gsap'

interface StackProps {
  stackData: {
    title: string
    body: Array<string>
  }
  showApp: boolean
}

export const Stack = React.memo(({ stackData, showApp }: StackProps) => {
  const [visibilityState, setVisibilityState] = useState(false)

  // const tl = useRef(gsap.timeline({ paused: true }))
  const tl = useRef(new TimelineLite({ paused: true }))

  let headerRef = useRef(null)
  let seperatorLineRef = useRef(null)
  let listItemsRefs = useRef(new Array(stackData.body.length))

  // const listItems = listItemsRefs.current.map((item) => item.current)

  useEffect(() => {
    tl.current
      .from([headerRef.current, seperatorLineRef.current], {
        duration: 0.5,
        x: '-100%',
        stagger: 0.2,
        ease: 'power3.out',
      })
      .from(listItemsRefs.current, {
        duration: 0.4,
        x: '-100%',
        stagger: 0.2,
        ease: 'power1.out',
        delay: -0.5,
      })
    // .from(headerRef.current, 0.5, { x: '-100%' })
    // .from(seperatorLineRef.current, 0.5, { x: '-100%' })
    // .from(listItemsRefs.current, 0.5, { x: '-100%' }, 0.5)
  }, [])

  useEffect(() => {
    if (visibilityState && showApp) {
      tl.current.play()
    }
  }, [visibilityState, showApp])

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisibilityState(isVisible)
    }
  }

  return (
    <VisibilitySensor
      partialVisibility
      onChange={onVisibilityChange}
      active={!visibilityState}
    >
      <div className='stack-container'>
        <h2 className='stack-header' ref={headerRef}>
          {stackData.title}
        </h2>
        <span className='seperator-line' ref={seperatorLineRef} />
        <ul className='stack-body-list-container'>
          {stackData.body.map((item, i) => (
            <li
              key={i}
              className='stack-list-item body-text'
              ref={(elem) => {
                listItemsRefs.current[i] = elem
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </VisibilitySensor>
  )
})
