import { useState, useRef, useEffect } from 'react'
import { Send, Search, ArrowLeft, X } from 'lucide-react'
import UserAvatar, { UserAvatarType } from '../../components/UserAvatar/UserAvatar'
import './Messages.css'

const conversations: {
  id: number; name: string; role: string; avatarType: UserAvatarType
  lastMsg: string; time: string; unread: number; online: boolean
}[] = [
  { id: 1, name: 'Dr. Amina Kedir',   role: 'OB-GYN',      avatarType: 'female-doctor', lastMsg: 'Your test results look great!',     time: '10:30',    unread: 2, online: true  },
  { id: 2, name: 'Dr. Yonas Tesfaye', role: 'Nutritionist', avatarType: 'male-doctor',   lastMsg: 'Try adding more iron-rich foods.',  time: '9:15',     unread: 0, online: false },
  { id: 3, name: 'Midwife Sara',       role: 'Midwife',      avatarType: 'midwife',       lastMsg: 'See you at your next appointment!', time: 'Yesterday', unread: 1, online: true  },
  { id: 4, name: 'Support Group',      role: 'Community',    avatarType: 'group',         lastMsg: 'Lena: Has anyone tried yoga?',      time: 'Yesterday', unread: 5, online: false },
]

const chatMessages = [
  { id: 1, from: 'doctor', text: 'Hello! How are you feeling today?',                                                                time: '10:00' },
  { id: 2, from: 'me',     text: "Hi Doctor! I'm feeling a bit tired but otherwise good.",                                           time: '10:05' },
  { id: 3, from: 'doctor', text: "That's normal at 24 weeks. Make sure you're getting enough rest and staying hydrated.",            time: '10:10' },
  { id: 4, from: 'me',     text: 'Thank you! I also wanted to ask about the iron supplements.',                                      time: '10:20' },
  { id: 5, from: 'doctor', text: "Your test results look great! Continue with the current dosage. We'll review at your next visit.", time: '10:30' },
]

export default function Messages() {
  const [activeChat, setActiveChat]   = useState<number | null>(null)
  const [message,    setMessage]      = useState('')
  const [messages,   setMessages]     = useState(chatMessages)
  const [searchOpen, setSearchOpen]   = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const activeConv = conversations.find((c) => c.id === activeChat)

  const filtered = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.lastMsg.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const openSearch = () => {
    setSearchOpen(true)
    setTimeout(() => searchInputRef.current?.focus(), 50)
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery('')
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages((prev) => [...prev, { id: prev.length + 1, from: 'me', text: message.trim(), time: 'Now' }])
    setMessage('')
  }

  /* ── Chat view ── */
  if (activeChat && activeConv) {
    return (
      <div className="chat">
        <div className="chat__header">
          <button className="chat__back" onClick={() => setActiveChat(null)} aria-label="Back">
            <ArrowLeft size={20} strokeWidth={2} />
          </button>
          <UserAvatar type={activeConv.avatarType} size={40} />
          <div className="chat__header-info">
            <p className="chat__header-name">{activeConv.name}</p>
            <p className="chat__header-role">{activeConv.role}</p>
          </div>
          {activeConv.online && <span className="chat__online-badge">● Online</span>}
        </div>

        <div className="chat__messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat__msg chat__msg--${msg.from}`}>
              <div className="chat__bubble">{msg.text}</div>
              <span className="chat__time">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="chat__input-row">
          <input
            className="chat__input"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="chat__send" onClick={sendMessage} aria-label="Send">
            <Send size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    )
  }

  /* ── List view ── */
  return (
    <div className="messages">

      {/* Header row */}
      <div className="messages__header">
        <h1 className="messages__title">Messages</h1>
        <button
          className={`messages__search-btn ${searchOpen ? 'messages__search-btn--active' : ''}`}
          aria-label="Search"
          onClick={searchOpen ? closeSearch : openSearch}
        >
          {searchOpen
            ? <X size={18} strokeWidth={2.5} />
            : <Search size={20} strokeWidth={1.8} />
          }
        </button>
      </div>

      {/* Search bar — slides in */}
      <div className={`messages__search-bar ${searchOpen ? 'messages__search-bar--open' : ''}`}>
        <div className="messages__search-inner">
          <Search size={16} strokeWidth={2} className="messages__search-icon" />
          <input
            ref={searchInputRef}
            className="messages__search-input"
            placeholder="Search by name, role or message…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="messages__search-clear" onClick={() => setSearchQuery('')} aria-label="Clear">
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      {/* Results count when searching */}
      {searchOpen && searchQuery && (
        <p className="messages__results-count">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{searchQuery}"
        </p>
      )}

      {/* Conversation list */}
      <div className="messages__list">
        {filtered.length === 0 && (
          <div className="messages__empty">
            <Search size={32} strokeWidth={1.5} />
            <p>No conversations found</p>
          </div>
        )}
        {filtered.map((conv) => (
          <button
            key={conv.id}
            className="messages__item"
            onClick={() => { setActiveChat(conv.id); closeSearch() }}
          >
            <div className="messages__avatar-wrap">
              <UserAvatar type={conv.avatarType} size={50} />
              {conv.online && <span className="messages__online-dot" />}
            </div>
            <div className="messages__info">
              <div className="messages__name-row">
                <span className="messages__name">{conv.name}</span>
                <span className="messages__time">{conv.time}</span>
              </div>
              <div className="messages__preview-row">
                <span className="messages__preview">{conv.lastMsg}</span>
                {conv.unread > 0 && <span className="messages__badge">{conv.unread}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
