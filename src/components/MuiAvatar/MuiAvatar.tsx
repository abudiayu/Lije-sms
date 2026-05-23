import { ReactNode } from 'react'
import './MuiAvatar.css'

type AvatarVariant = 'female-doctor' | 'male-doctor' | 'female' | 'group' | 'mother' | 'midwife'

interface MuiAvatarProps {
  variant?: AvatarVariant
  size?: number
  className?: string
}

interface AvatarConfig {
  bg: string
  accent: string
  icon: ReactNode
}

const configs: Record<AvatarVariant, AvatarConfig> = {
  'female-doctor': {
    bg: '#dbeafe',
    accent: '#2563eb',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        {/* MUI AccountCircle-style female doctor */}
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        {/* stethoscope hint */}
        <circle cx="16" cy="8" r="1.5" fill="white" opacity="0.8" />
        <path d="M16 9.5 Q17.5 11 17 13" stroke="white" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
  'male-doctor': {
    bg: '#ede9fe',
    accent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        <rect x="14.5" y="7" width="3" height="1.5" rx="0.75" fill="white" opacity="0.8" />
        <path d="M16 8.5v3" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
  'female': {
    bg: '#fce7f3',
    accent: '#db2777',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    ),
  },
  'midwife': {
    bg: '#ecfdf5',
    accent: '#059669',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        <path d="M11 8h2v4h-2zM11 13h2v2h-2z" fill="white" opacity="0.8" />
      </svg>
    ),
  },
  'mother': {
    bg: '#fdf2f8',
    accent: '#be185d',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        {/* pregnant woman silhouette */}
        <circle cx="12" cy="6" r="3" />
        <path d="M12 10c-3 0-5 1.5-5 4v1c0 1 0.5 2 1.5 2.5L9 20h6l0.5-2.5C16.5 17 17 16 17 15v-1c0-2.5-2-4-5-4z" />
        <ellipse cx="14" cy="15" rx="2.5" ry="3" opacity="0.4" />
      </svg>
    ),
  },
  'group': {
    bg: '#fffbeb',
    accent: '#d97706',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        {/* MUI Group icon */}
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
}

export default function MuiAvatar({ variant = 'female', size = 44, className = '' }: MuiAvatarProps) {
  const cfg = configs[variant]
  return (
    <div
      className={`mui-avatar ${className}`}
      style={{
        width: size,
        height: size,
        background: cfg.bg,
        color: cfg.accent,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div style={{ width: size * 0.6, height: size * 0.6 }}>
        {cfg.icon}
      </div>
    </div>
  )
}
