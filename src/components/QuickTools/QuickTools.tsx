import { useNavigate } from 'react-router-dom'
import './QuickTools.css'

const tools = [
  {
    id: 'kick',
    label: 'Kick Counter',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <ellipse cx="14" cy="28" rx="5" ry="7" fill="#c7d2fe" transform="rotate(-20 14 28)" />
        <ellipse cx="22" cy="30" rx="5" ry="7" fill="#c7d2fe" transform="rotate(-10 22 30)" />
        <ellipse cx="30" cy="28" rx="5" ry="7" fill="#c7d2fe" transform="rotate(10 30 28)" />
        <ellipse cx="20" cy="16" rx="8" ry="10" fill="#a5b4fc" />
      </svg>
    ),
    path: '/journey',
  },
  {
    id: 'contractions',
    label: 'Contractions Timer',
    color: '#ec4899',
    bg: '#fdf2f8',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#fbcfe8" strokeWidth="3" />
        <circle cx="20" cy="20" r="10" fill="#fce7f3" />
        <path d="M20 12v8l5 3" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    path: '/journey',
  },
  {
    id: 'appointments',
    label: 'Appointments',
    color: '#10b981',
    bg: '#ecfdf5',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="24" rx="4" fill="#d1fae5" />
        <rect x="6" y="10" width="28" height="8" rx="4" fill="#6ee7b7" />
        <path d="M14 6v6M26 6v6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 24l4 4 10-8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    path: '/appointments',
  },
  {
    id: 'medications',
    label: 'Medications',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="8" ry="14" fill="#ddd6fe" transform="rotate(-30 20 20)" />
        <ellipse cx="20" cy="20" rx="4" ry="7" fill="#8b5cf6" transform="rotate(-30 20 20)" />
        <line x1="12" y1="28" x2="28" y2="12" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    path: '/journey',
  },
  {
    id: 'health',
    label: 'Health Records',
    color: '#f59e0b',
    bg: '#fffbeb',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="8" y="6" width="24" height="28" rx="4" fill="#fef3c7" />
        <path d="M14 16h12M14 21h8M14 26h10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="28" r="7" fill="#f59e0b" />
        <path d="M26 28h4M28 26v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    path: '/medical-records',
  },
]

export default function QuickTools() {
  const navigate = useNavigate()

  return (
    <section className="quick-tools">
      <div className="quick-tools__header">
        <h3 className="quick-tools__title">Quick Tools</h3>
        <button className="quick-tools__see-all" onClick={() => navigate('/journey')}>
          See All &rsaquo;
        </button>
      </div>
      <div className="quick-tools__grid">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className="quick-tool"
            style={{ '--tool-color': tool.color, '--tool-bg': tool.bg } as React.CSSProperties}
            onClick={() => navigate(tool.path)}
          >
            <div className="quick-tool__icon">{tool.icon}</div>
            <span className="quick-tool__label">{tool.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
