import { Typography } from '@mui/material'
import { useState, useEffect, useRef, memo } from 'react'

const TypingEffect = memo(
  ({ text, speed }: { text: string; speed: number }) => {
    const [displayedText, setDisplayedText] = useState('')
    const indexRef = useRef(0)

    useEffect(() => {
      const interval = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1))
          indexRef.current += 1
        } else {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, [text, speed])

    return <Typography>{displayedText}</Typography>
  },
)

TypingEffect.displayName = 'TypingEffect'

export default TypingEffect
