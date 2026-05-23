import { useNavigate } from 'react-router-dom'
import './CategoryCards.css'

const categories = [
  {
    id: 'pregnancy-calc',
    label: 'Pregnancy Calculation',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" fill="#c7d2fe" />
        <rect x="14" y="14" width="20" height="3" rx="1.5" fill="#6366f1" />
        <rect x="14" y="20" width="14" height="3" rx="1.5" fill="#6366f1" />
        <circle cx="32" cy="32" r="6" fill="#6366f1" />
        <path d="M30 32h4M32 30v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    active: true,
  },
  {
    id: 'during-pregnancy',
    label: 'During Pregnancy',
    color: '#ec4899',
    bg: '#fdf2f8',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="20" rx="8" ry="9" fill="#fbcfe8" />
        <ellipse cx="24" cy="34" rx="12" ry="10" fill="#f9a8d4" />
        <ellipse cx="24" cy="30" rx="7" ry="6" fill="#fce7f3" />
      </svg>
    ),
  },
  {
    id: 'after-birth',
    label: 'After Birth',
    color: '#10b981',
    bg: '#ecfdf5',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="22" r="10" fill="#a7f3d0" />
        <circle cx="20" cy="20" r="2" fill="#10b981" />
        <circle cx="28" cy="20" r="2" fill="#10b981" />
        <path d="M19 26c1.2 2 8.8 2 10 0" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 36c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#6ee7b7" />
      </svg>
    ),
  },
  {
    id: 'doctor',
    label: "Doctor via Mother's Connector",
    color: '#3b82f6',
    bg: '#eff6ff',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="18" r="9" fill="#bfdbfe" />
        <path d="M12 40c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="#93c5fd" />
        <rect x="20" y="10" width="8" height="3" rx="1.5" fill="#3b82f6" />
        <circle cx="34" cy="34" r="7" fill="#3b82f6" />
        <path d="M32 34h4M34 32v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function CategoryCards() {
  const navigate = useNavigate()

  return (
    <div className="category-cards">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-card ${cat.active ? 'category-card--active' : ''}`}
          style={{ '--card-color': cat.color, '--card-bg': cat.bg } as React.CSSProperties}
          onClick={() => navigate('/journey')}
        >
          <div className="category-card__icon">{cat.icon}</div>
          <span className="category-card__label">{cat.label}</span>
        </button>
      ))}
    </div>
  )
}
