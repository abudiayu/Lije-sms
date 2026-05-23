import { Upload } from 'lucide-react'
import './PregnancyCard.css'

interface PregnancyCardProps {
  weeks?: number
  days?: number
  dueDate?: string
  trimester?: number
  progress?: number
  babySize?: string
  babyWeight?: string
  fruitComparison?: string
}

export default function PregnancyCard({
  weeks = 24,
  days = 3,
  dueDate = 'July 20, 2025',
  trimester = 2,
  progress = 60,
  babySize = '21.5 cm',
  babyWeight = '650 g',
  fruitComparison = 'Mango',
}: PregnancyCardProps) {
  const trimesterLabel = trimester === 1 ? '1st' : trimester === 2 ? '2nd' : '3rd'

  return (
    <div className="pregnancy-card">
      <div className="pregnancy-card__top">
        <div className="pregnancy-card__info">
          <h3 className="pregnancy-card__title">My Pregnancy</h3>
          <p className="pregnancy-card__weeks">
            {weeks} Weeks + {days} Days
          </p>
          <p className="pregnancy-card__due">Due Date: {dueDate}</p>

          <div className="pregnancy-card__progress-wrap">
            <div className="pregnancy-card__progress-bar">
              <div
                className="pregnancy-card__progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="pregnancy-card__progress-labels">
              <span className="pregnancy-card__trimester">
                You're in {trimesterLabel} Trimester
              </span>
              <span className="pregnancy-card__percent">{progress}%</span>
            </div>
          </div>
        </div>

        <div className="pregnancy-card__illustration">
          <button className="pregnancy-card__share" aria-label="Share">
            <Upload size={16} strokeWidth={2} />
          </button>
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="75" rx="48" ry="55" fill="#fce7f3" opacity="0.6" />
            <ellipse cx="60" cy="72" rx="36" ry="42" fill="#fbcfe8" opacity="0.8" />
            <circle cx="60" cy="48" r="16" fill="#fda4af" />
            <ellipse cx="60" cy="80" rx="18" ry="22" fill="#fda4af" />
            <circle cx="54" cy="44" r="3" fill="#fb7185" />
            <circle cx="66" cy="44" r="3" fill="#fb7185" />
            <path d="M54 52c2 3 10 3 12 0" stroke="#fb7185" strokeWidth="1.5" strokeLinecap="round" />
            <ellipse cx="42" cy="72" rx="8" ry="12" fill="#fda4af" transform="rotate(-20 42 72)" />
            <ellipse cx="78" cy="72" rx="8" ry="12" fill="#fda4af" transform="rotate(20 78 72)" />
            <ellipse cx="50" cy="96" rx="8" ry="12" fill="#fda4af" transform="rotate(15 50 96)" />
            <ellipse cx="70" cy="96" rx="8" ry="12" fill="#fda4af" transform="rotate(-15 70 96)" />
            <circle cx="60" cy="75" r="4" fill="#fb7185" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="pregnancy-card__stats">
        <div className="pregnancy-card__stat">
          <div className="pregnancy-card__stat-icon pregnancy-card__stat-icon--blue">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M12 3v18" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
              <rect x="5" y="5" width="14" height="14" rx="2" stroke="#6366f1" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="pregnancy-card__stat-label">Baby Size</p>
            <p className="pregnancy-card__stat-value">{babySize}</p>
          </div>
        </div>

        <div className="pregnancy-card__stat">
          <div className="pregnancy-card__stat-icon pregnancy-card__stat-icon--pink">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" fill="#fce7f3" />
              <path d="M12 7v5l3 3" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="8" stroke="#ec4899" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="pregnancy-card__stat-label">Baby Weight</p>
            <p className="pregnancy-card__stat-value">{babyWeight}</p>
          </div>
        </div>

        <div className="pregnancy-card__stat">
          <div className="pregnancy-card__stat-icon pregnancy-card__stat-icon--green">
            <svg viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="14" rx="7" ry="8" fill="#d1fae5" />
              <ellipse cx="12" cy="14" rx="5" ry="6" fill="#6ee7b7" />
              <path d="M12 6c0-3 4-5 4-5s-1 4-4 5z" fill="#10b981" />
            </svg>
          </div>
          <div>
            <p className="pregnancy-card__stat-label">About as big as</p>
            <p className="pregnancy-card__stat-value">{fruitComparison}</p>
          </div>
        </div>
      </div>

      <button className="pregnancy-card__btn">Update My Details</button>
    </div>
  )
}
