import { useEffect, useRef, useState } from 'react'
import logoImg from '../../assets/logimg.png'
import './SplashScreen.css'

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter')
  const [progress, setProgress] = useState(0)
  const onFinishRef = useRef(onFinish)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    onFinishRef.current = onFinish
  })

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 400)
    const t2 = setTimeout(() => setPhase('exit'), 2600)
    const t3 = setTimeout(() => onFinishRef.current(), 3200)

    let start: number | null = null
    const duration = 2200

    const tick = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      const pct = Math.min((elapsed / duration) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className={`splash splash--${phase}`}>
      <div className="splash__blob splash__blob--1" />
      <div className="splash__blob splash__blob--2" />
      <div className="splash__blob splash__blob--3" />

      <div className="splash__hearts">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`splash__heart splash__heart--${i + 1}`}>♥</span>
        ))}
      </div>

      <div className="splash__center">
        <div className="splash__logo-wrap">
          <div className="splash__logo-ring splash__logo-ring--outer" />
          <div className="splash__logo-ring splash__logo-ring--inner" />
          <img src={logoImg} alt="Mother's Connect" className="splash__logo-img" />
        </div>

        <div className="splash__brand">
          <h1 className="splash__app-name">
            Mother's <span className="splash__app-name-accent">Connect</span>
          </h1>
          <p className="splash__tagline">Smart Maternal Healthcare</p>
        </div>

        <div className="splash__progress-track">
          <div className="splash__progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="splash__loading-text">
          {progress < 40
            ? 'Loading your health data…'
            : progress < 75
            ? 'Preparing your journey…'
            : 'Almost ready…'}
        </p>
      </div>

      <p className="splash__footer">Caring for you & your little one 💙</p>
    </div>
  )
}
