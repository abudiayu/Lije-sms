import { Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './DoctorCard.css'

export default function DoctorCard() {
  const navigate = useNavigate()

  return (
    <div className="doctor-card">
      <div className="doctor-card__left">
        <div className="doctor-card__title-row">
          <h3 className="doctor-card__title">Talk to a Doctor</h3>
          <span className="doctor-card__online">
            <span className="doctor-card__dot" />
            Online
          </span>
        </div>
        <p className="doctor-card__desc">
          Connect with trusted doctors through Mother's Connector
        </p>
        <button
          className="doctor-card__btn"
          onClick={() => navigate('/messages')}
        >
          <Phone size={16} strokeWidth={2} />
          Consult Now
        </button>
      </div>
      <div className="doctor-card__illustration">
        <svg viewBox="0 0 100 120" fill="none">
          <circle cx="50" cy="32" r="22" fill="#dbeafe" />
          <circle cx="50" cy="28" r="14" fill="#93c5fd" />
          <ellipse cx="50" cy="56" rx="20" ry="24" fill="#bfdbfe" />
          <ellipse cx="50" cy="52" rx="14" ry="16" fill="#dbeafe" />
          <circle cx="44" cy="25" r="2.5" fill="#1d4ed8" />
          <circle cx="56" cy="25" r="2.5" fill="#1d4ed8" />
          <path d="M44 32c2 3 10 3 12 0" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="44" y="10" width="12" height="4" rx="2" fill="#1d4ed8" />
          <path d="M38 56c-6 2-10 8-10 14" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 56c6 2 10 8 10 14" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
          <circle cx="68" cy="72" r="14" fill="#dbeafe" />
          <path d="M62 72h12M68 66v12" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="68" cy="72" r="10" stroke="#93c5fd" strokeWidth="1.5" />
          <circle cx="72" cy="50" r="8" fill="#fce7f3" />
          <path d="M68 50c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#ec4899" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
