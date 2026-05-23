import { NavLink } from 'react-router-dom'
import { Home, Heart, Users, MessageCircle, User } from 'lucide-react'
import './BottomNav.css'

const navItems = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/journey', icon: Heart, label: 'Journey' },
  { to: '/community', icon: Users, label: 'Community' },
  { to: '/messages', icon: MessageCircle, label: 'Messages', badge: 3 },
  { to: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map(({ to, icon: Icon, label, badge }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`
          }
        >
          <div className="bottom-nav__icon-wrap">
            <Icon size={22} strokeWidth={1.8} />
            {badge && <span className="bottom-nav__badge">{badge}</span>}
          </div>
          <span className="bottom-nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
