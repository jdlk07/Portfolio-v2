import React, { useState } from 'react'
import { LoadingText } from './loadingText'

const loadingText = ['Web', 'App', 'React', 'Developer']

interface IsProps {
  showApp: () => void
}

export const LoadingScreen = React.memo(({ showApp }: IsProps) => {
  const [mounted, setMounted] = useState(true)

  const [textAnimating, setTextAnimating] = useState(true)

  const onTextAnimatingComplete = () => setTextAnimating(false)

  const onTransitionEnd = (e: any) => {
    showApp()
    setMounted(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`loading-screen-wrapper ${
        textAnimating ? 'visible' : 'hidden'
      }`}
      onTransitionEnd={onTransitionEnd}
    >
      <div
        className='loading-screen-message-container'
        onTransitionEnd={(e) => e.stopPropagation()}
      >
        <LoadingText
          textArray={loadingText}
          onTextAnimatingComplete={onTextAnimatingComplete}
        />
      </div>
    </div>
  )
})
