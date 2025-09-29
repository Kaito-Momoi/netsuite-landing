import React from 'react'
import { useLocation } from 'react-router-dom'

type AnimationContextValue = {
  shouldAnimate: boolean
  suppressForInteraction: () => void
}

const AnimationContext = React.createContext<AnimationContextValue>({
  shouldAnimate: true,
  suppressForInteraction: () => {}
})

const NO_ANIM_CLASS = 'no-anim'

const getRootElement = () => (typeof document !== 'undefined' ? document.documentElement : null)

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation()
  const [shouldAnimate, setShouldAnimate] = React.useState(true)
  const timeoutRef = React.useRef<number | undefined>(undefined)
  const previousPathRef = React.useRef(location.pathname)

  const clearNoAnim = React.useCallback(() => {
    const root = getRootElement()
    root?.classList.remove(NO_ANIM_CLASS)
    if (typeof window !== 'undefined' && timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }, [])

  React.useEffect(() => {
    const currentPath = location.pathname + location.search
    if (previousPathRef.current !== currentPath) {
      setShouldAnimate(true)
      clearNoAnim()
      previousPathRef.current = currentPath
    }
  }, [location.pathname, location.search, clearNoAnim])

  const suppressForInteraction = React.useCallback(() => {
    setShouldAnimate(false)
    const root = getRootElement()
    root?.classList.add(NO_ANIM_CLASS)
    if (typeof window !== 'undefined' && timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    if (typeof window !== 'undefined') {
      timeoutRef.current = window.setTimeout(() => {
        clearNoAnim()
        setShouldAnimate(true)
      }, 400)
    }
  }, [clearNoAnim])

  React.useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const value = React.useMemo(
    () => ({ shouldAnimate, suppressForInteraction }),
    [shouldAnimate, suppressForInteraction]
  )

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>
}

export const useAnimationControl = () => React.useContext(AnimationContext)
