import React, { useState, useEffect } from 'react'

interface IsProps {
  visible: boolean
  showApp: () => void
}

export const LoadingScreen = React.memo(({ visible, showApp }: IsProps) => {
  const [mounted, setMounted] = useState(visible)

  const onTransitionEnd = (e: any) => {
    showApp()
    setMounted(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div
      className={`loading-screen-wrapper ${visible ? 'visible' : 'hidden'}`}
      onTransitionEnd={onTransitionEnd}
    >
      <div
        className='loading-screen-message-container'
        onTransitionEnd={(e) => e.stopPropagation()}
      >
        <h2 className='loading-text header'>loading</h2>
      </div>
    </div>
  )
})
