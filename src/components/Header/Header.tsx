import { Bell, MessageCircle } from 'lucide-react'
import './Header.css'

interface HeaderProps {
  name?: string
  weeks?: number
}

export default function Header({ name = 'Selam', weeks = 24 }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__avatar">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#fce7f3" />
            <ellipse cx="40" cy="32" rx="14" ry="14" fill="#f9a8d4" />
            <ellipse cx="40" cy="62" rx="20" ry="16" fill="#f9a8d4" />
            <ellipse cx="40" cy="58" rx="12" ry="10" fill="#fce7f3" />
          </svg>
        </div>
        <div className="header__text">
          <h2 className="header__greeting">Hi {name} 👋</h2>
          <p className="header__subtitle">You're {weeks} weeks pregnant</p>
        </div>
      </div>
      <div className="header__actions">
        <button className="header__icon-btn" aria-label="Notifications">
          <Bell size={20} strokeWidth={1.8} />
          <span className="header__notif-dot" />
        </button>
        <button className="header__icon-btn" aria-label="Messages">
          <MessageCircle size={20} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  )
}
