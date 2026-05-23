import { useNavigate } from 'react-router-dom'
import { Settings, ChevronRight, Bell, Shield, HelpCircle, LogOut, FileText, Calendar } from 'lucide-react'
import './Profile.css'

const menuItems = [
  { icon: FileText, label: 'Medical Records', path: '/medical-records', color: '#6366f1', bg: '#eef2ff' },
  { icon: Calendar, label: 'Appointments', path: '/appointments', color: '#10b981', bg: '#ecfdf5' },
  { icon: Bell, label: 'Notifications', path: '/settings', color: '#f59e0b', bg: '#fffbeb' },
  { icon: Shield, label: 'Privacy & Security', path: '/settings', color: '#ec4899', bg: '#fdf2f8' },
  { icon: Settings, label: 'Settings', path: '/settings', color: '#8b5cf6', bg: '#f5f3ff' },
  { icon: HelpCircle, label: 'Help & Support', path: '/settings', color: '#3b82f6', bg: '#eff6ff' },
]

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="profile">
      <div className="profile__hero">
        <div className="profile__avatar">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#fce7f3" />
            <ellipse cx="40" cy="32" rx="14" ry="14" fill="#f9a8d4" />
            <ellipse cx="40" cy="62" rx="20" ry="16" fill="#f9a8d4" />
            <ellipse cx="40" cy="58" rx="12" ry="10" fill="#fce7f3" />
          </svg>
        </div>
        <h2 className="profile__name">Selam Tadesse</h2>
        <p className="profile__tag">24 Weeks Pregnant · 2nd Trimester</p>
        <button className="profile__edit-btn" onClick={() => navigate('/settings')}>
          Edit Profile
        </button>
      </div>

      <div className="profile__stats">
        <div className="profile__stat">
          <span className="profile__stat-val">24</span>
          <span className="profile__stat-label">Weeks</span>
        </div>
        <div className="profile__stat-divider" />
        <div className="profile__stat">
          <span className="profile__stat-val">July 20</span>
          <span className="profile__stat-label">Due Date</span>
        </div>
        <div className="profile__stat-divider" />
        <div className="profile__stat">
          <span className="profile__stat-val">3</span>
          <span className="profile__stat-label">Doctors</span>
        </div>
      </div>

      <div className="profile__menu">
        {menuItems.map(({ icon: Icon, label, path, color, bg }) => (
          <button
            key={label}
            className="profile__menu-item"
            onClick={() => navigate(path)}
          >
            <div
              className="profile__menu-icon"
              style={{ background: bg, color }}
            >
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <span className="profile__menu-label">{label}</span>
            <ChevronRight size={16} strokeWidth={2} className="profile__menu-arrow" />
          </button>
        ))}
      </div>

      <button className="profile__logout" onClick={() => navigate('/login')}>
        <LogOut size={18} strokeWidth={2} />
        Log Out
      </button>
    </div>
  )
}
