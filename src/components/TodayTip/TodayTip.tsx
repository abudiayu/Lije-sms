import './TodayTip.css'

interface TodayTipProps {
  tip?: string
}

export default function TodayTip({
  tip = "Drink plenty of water and get enough rest. Your baby loves you!",
}: TodayTipProps) {
  return (
    <div className="today-tip">
      <div className="today-tip__left">
        <div className="today-tip__icon">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#fef9c3" />
            <ellipse cx="16" cy="12" rx="6" ry="7" fill="#fde047" />
            <rect x="13" y="19" width="6" height="3" rx="1.5" fill="#fbbf24" />
            <rect x="14" y="22" width="4" height="2" rx="1" fill="#f59e0b" />
            <path d="M10 10c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="today-tip__text">
          <p className="today-tip__label">Today's Tip</p>
          <p className="today-tip__content">{tip}</p>
        </div>
      </div>
      <div className="today-tip__illustration">
        <svg viewBox="0 0 80 100" fill="none">
          <ellipse cx="40" cy="55" rx="22" ry="28" fill="#ddd6fe" opacity="0.5" />
          <circle cx="40" cy="28" rx="12" ry="12" fill="#c4b5fd" />
          <ellipse cx="40" cy="52" rx="14" ry="18" fill="#a78bfa" />
          <ellipse cx="40" cy="48" rx="10" ry="12" fill="#ddd6fe" />
          <ellipse cx="28" cy="50" rx="6" ry="10" fill="#a78bfa" transform="rotate(-15 28 50)" />
          <ellipse cx="52" cy="50" rx="6" ry="10" fill="#a78bfa" transform="rotate(15 52 50)" />
          <ellipse cx="34" cy="68" rx="6" ry="10" fill="#a78bfa" transform="rotate(10 34 68)" />
          <ellipse cx="46" cy="68" rx="6" ry="10" fill="#a78bfa" transform="rotate(-10 46 68)" />
          <circle cx="36" cy="25" r="2" fill="#7c3aed" />
          <circle cx="44" cy="25" r="2" fill="#7c3aed" />
          <path d="M36 31c1.5 2 6.5 2 8 0" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="56" cy="30" r="4" fill="#fce7f3" />
          <circle cx="58" cy="28" r="2" fill="#f9a8d4" />
          <path d="M52 20c2-4 8-4 8 0" stroke="#f9a8d4" strokeWidth="1" strokeLinecap="round" />
          <circle cx="62" cy="42" r="3" fill="#fce7f3" />
          <circle cx="64" cy="40" r="1.5" fill="#f9a8d4" />
        </svg>
      </div>
    </div>
  )
}
