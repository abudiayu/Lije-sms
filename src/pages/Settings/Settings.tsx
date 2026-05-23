import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Settings.css'

export default function Settings() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(true)
  const [reminders, setReminders] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('English')

  return (
    <div className="settings">
      <div className="settings__header">
        <button className="settings__back" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <h1 className="settings__title">Settings</h1>
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">Account</h3>
        <div className="settings__group">
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Full Name</p>
              <p className="settings__item-value">Selam Tadesse</p>
            </div>
            <button className="settings__item-edit">Edit</button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Email</p>
              <p className="settings__item-value">selam@example.com</p>
            </div>
            <button className="settings__item-edit">Edit</button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Phone</p>
              <p className="settings__item-value">+251 91 234 5678</p>
            </div>
            <button className="settings__item-edit">Edit</button>
          </div>
        </div>
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">Preferences</h3>
        <div className="settings__group">
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Push Notifications</p>
              <p className="settings__item-sub">Receive health reminders</p>
            </div>
            <button
              className={`settings__toggle ${notifications ? 'settings__toggle--on' : ''}`}
              onClick={() => setNotifications(!notifications)}
              aria-label="Toggle notifications"
            >
              <span className="settings__toggle-thumb" />
            </button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Medication Reminders</p>
              <p className="settings__item-sub">Daily medication alerts</p>
            </div>
            <button
              className={`settings__toggle ${reminders ? 'settings__toggle--on' : ''}`}
              onClick={() => setReminders(!reminders)}
              aria-label="Toggle reminders"
            >
              <span className="settings__toggle-thumb" />
            </button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Dark Mode</p>
              <p className="settings__item-sub">Switch to dark theme</p>
            </div>
            <button
              className={`settings__toggle ${darkMode ? 'settings__toggle--on' : ''}`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              <span className="settings__toggle-thumb" />
            </button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Language</p>
              <p className="settings__item-value">{language}</p>
            </div>
            <select
              className="settings__select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Amharic</option>
              <option>Oromo</option>
              <option>Tigrinya</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">Pregnancy Info</h3>
        <div className="settings__group">
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Last Menstrual Period</p>
              <p className="settings__item-value">October 27, 2024</p>
            </div>
            <button className="settings__item-edit">Edit</button>
          </div>
          <div className="settings__item">
            <div className="settings__item-info">
              <p className="settings__item-label">Due Date</p>
              <p className="settings__item-value">July 20, 2025</p>
            </div>
            <button className="settings__item-edit">Edit</button>
          </div>
        </div>
      </div>

      <button className="settings__save-btn">Save Changes</button>
    </div>
  )
}
