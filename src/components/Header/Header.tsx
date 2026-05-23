import { useState, useRef, useEffect } from 'react'
import { Bell, MessageCircle, CheckCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import UserAvatar, { UserAvatarType } from '../UserAvatar/UserAvatar'
import logoImg from '../../assets/logimg.png'
import './Header.css'

interface HeaderProps {
  name?: string
  weeks?: number
}

const notifications = [
  { id: 1, title: 'Medication Reminder',     message: 'Time to take your Iron supplement',          time: '5 min ago',  read: false, emoji: '💊' },
  { id: 2, title: 'Appointment Tomorrow',    message: 'Dr. Amina Kedir at 10:00 AM – Tikur Anbessa', time: '1 hr ago',   read: false, emoji: '📅' },
  { id: 3, title: 'Weekly Pregnancy Update', message: 'You are now 24 weeks! Baby is size of a mango', time: '3 hrs ago', read: true,  emoji: '🤰' },
  { id: 4, title: 'New Message',             message: 'Dr. Amina: Your test results look great!',    time: 'Yesterday',  read: true,  emoji: '💬' },
]

const recentMessages: {
  id: number; name: string; avatarType: UserAvatarType; text: string; time: string; unread: number
}[] = [
  { id: 1, name: 'Dr. Amina Kedir', avatarType: 'female-doctor', text: 'Your test results look great!',      time: '10:30',    unread: 2 },
  { id: 2, name: 'Midwife Sara',    avatarType: 'midwife',        text: 'See you at your next appointment!', time: '9:15',     unread: 1 },
  { id: 3, name: 'Dr. Yonas',      avatarType: 'male-doctor',    text: 'Try adding more iron-rich foods.',  time: 'Yesterday', unread: 0 },
]

export default function Header({ name = 'Selam', weeks = 24 }: HeaderProps) {
  const navigate = useNavigate()
  const [showNotif,    setShowNotif]    = useState(false)
  const [showMessages, setShowMessages] = useState(false)
  const [notifs,       setNotifs]       = useState(notifications)
  const notifRef = useRef<HTMLDivElement>(null)
  const msgRef   = useRef<HTMLDivElement>(null)

  const unreadCount   = notifs.filter((n) => !n.read).length
  const totalMsgUnread = recentMessages.reduce((s, m) => s + m.unread, 0)

  const markAllRead = () => setNotifs((p) => p.map((n) => ({ ...n, read: true })))
  const markOneRead = (id: number) => setNotifs((p) => p.map((n) => n.id === id ? { ...n, read: true } : n))

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotif(false)
      if (msgRef.current   && !msgRef.current.contains(e.target as Node))   setShowMessages(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openNotif = () => { setShowMessages(false); setShowNotif((v) => !v) }
  const openMsgs  = () => { setShowNotif(false);    setShowMessages((v) => !v) }

  return (
    <header className="header">
      <div className="header__left">
        {/* ── logo image from assets ── */}
        <div className="header__avatar">
          <img src={logoImg} alt="Mother's Connect" className="header__avatar-img" />
        </div>
        <div className="header__text">
          <h2 className="header__greeting">Hi {name} 👋</h2>
          <p className="header__subtitle">You're {weeks} weeks pregnant</p>
        </div>
      </div>

      <div className="header__actions">

        {/* ── Bell ── */}
        <div className="header__dropdown-wrap" ref={notifRef}>
          <button
            className={`header__icon-btn ${showNotif ? 'header__icon-btn--active' : ''}`}
            aria-label="Notifications"
            onClick={openNotif}
          >
            {/* MUI NotificationsNone SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
            </svg>
            {unreadCount > 0 && <span className="header__badge">{unreadCount}</span>}
          </button>

          {showNotif && (
            <div className="header__panel">
              <div className="header__panel-header">
                <span className="header__panel-title">Notifications</span>
                <button className="header__panel-action" onClick={markAllRead}>
                  <CheckCheck size={13} strokeWidth={2} /> Mark all read
                </button>
              </div>
              <div className="header__panel-list">
                {notifs.map((n) => (
                  <button
                    key={n.id}
                    className={`header__notif-item ${!n.read ? 'header__notif-item--unread' : ''}`}
                    onClick={() => markOneRead(n.id)}
                  >
                    <span className="header__notif-emoji">{n.emoji}</span>
                    <div className="header__notif-body">
                      <p className="header__notif-title">{n.title}</p>
                      <p className="header__notif-msg">{n.message}</p>
                      <p className="header__notif-time">{n.time}</p>
                    </div>
                    {!n.read && <span className="header__unread-dot" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Chat bubble ── */}
        <div className="header__dropdown-wrap" ref={msgRef}>
          <button
            className={`header__icon-btn ${showMessages ? 'header__icon-btn--active' : ''}`}
            aria-label="Messages"
            onClick={openMsgs}
          >
            {/* MUI ChatBubbleOutline SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            {totalMsgUnread > 0 && <span className="header__badge">{totalMsgUnread}</span>}
          </button>

          {showMessages && (
            <div className="header__panel">
              <div className="header__panel-header">
                <span className="header__panel-title">Messages</span>
                <button className="header__panel-action" onClick={() => { setShowMessages(false); navigate('/messages') }}>
                  See all
                </button>
              </div>
              <div className="header__panel-list">
                {recentMessages.map((m) => (
                  <button
                    key={m.id}
                    className="header__msg-item"
                    onClick={() => { setShowMessages(false); navigate('/messages') }}
                  >
                    <div className="header__msg-avatar-wrap">
                      <UserAvatar type={m.avatarType} size={42} />
                      {m.unread > 0 && <span className="header__msg-badge">{m.unread}</span>}
                    </div>
                    <div className="header__msg-body">
                      <div className="header__msg-name-row">
                        <span className="header__msg-name">{m.name}</span>
                        <span className="header__msg-time">{m.time}</span>
                      </div>
                      <p className="header__msg-preview">{m.text}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button className="header__panel-footer-btn" onClick={() => { setShowMessages(false); navigate('/messages') }}>
                Open Messages
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}
