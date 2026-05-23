import { ReactNode } from 'react'
import './UserAvatar.css'

export type UserAvatarType =
  | 'female-doctor'
  | 'male-doctor'
  | 'pregnant-woman'
  | 'young-woman'
  | 'baby'
  | 'midwife'
  | 'group'

interface UserAvatarProps {
  type: UserAvatarType
  size?: number
  className?: string
}

interface AvatarConfig {
  bg: string
  svg: ReactNode
}

const avatars: Record<UserAvatarType, AvatarConfig> = {
  'female-doctor': {
    bg: '#dbeafe',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#dbeafe" />
        <ellipse cx="32" cy="22" rx="13" ry="14" fill="#1e3a5f" />
        <path d="M19 26 Q17 36 20 44 Q22 48 26 46 Q24 40 24 32Z" fill="#1e3a5f" />
        <path d="M45 26 Q47 36 44 44 Q42 48 38 46 Q40 40 40 32Z" fill="#1e3a5f" />
        <circle cx="32" cy="24" r="10" fill="#fde8d8" />
        <circle cx="28" cy="23" r="1.5" fill="#1e3a5f" />
        <circle cx="36" cy="23" r="1.5" fill="#1e3a5f" />
        <path d="M28 27 Q32 30 36 27" stroke="#e07b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M20 44 Q20 56 32 58 Q44 56 44 44 L40 38 Q36 42 32 42 Q28 42 24 38Z" fill="#ffffff" />
        <path d="M24 38 Q28 42 32 42 Q36 42 40 38 L38 36 Q34 40 32 40 Q30 40 26 36Z" fill="#3b82f6" />
        <path d="M28 44 Q26 48 28 52 Q30 54 32 52" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="52" r="2" fill="#1d4ed8" />
        <path d="M29 38 L32 43 L35 38" stroke="#e2e8f0" strokeWidth="1" fill="none" />
      </svg>
    ),
  },

  'male-doctor': {
    bg: '#ede9fe',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#ede9fe" />
        <ellipse cx="32" cy="20" rx="11" ry="10" fill="#2d3748" />
        <circle cx="32" cy="24" r="10" fill="#fde8d8" />
        <path d="M24 28 Q24 34 32 35 Q40 34 40 28" fill="#e8c9a8" opacity="0.5" />
        <circle cx="28.5" cy="23" r="1.5" fill="#2d3748" />
        <circle cx="35.5" cy="23" r="1.5" fill="#2d3748" />
        <path d="M28 27 Q32 30 36 27" stroke="#c97b5a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M20 44 Q20 56 32 58 Q44 56 44 44 L40 38 Q36 42 32 42 Q28 42 24 38Z" fill="#ffffff" />
        <path d="M24 38 Q28 42 32 42 Q36 42 40 38 L38 36 Q34 40 32 40 Q30 40 26 36Z" fill="#7c3aed" />
        <path d="M28 44 Q26 48 28 52 Q30 54 32 52" stroke="#5b21b6" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="52" r="2" fill="#5b21b6" />
        <rect x="34" y="44" width="8" height="5" rx="1" fill="#ddd6fe" />
        <rect x="35" y="45.5" width="6" height="1" rx="0.5" fill="#7c3aed" />
        <rect x="35" y="47" width="4" height="1" rx="0.5" fill="#7c3aed" />
      </svg>
    ),
  },

  'pregnant-woman': {
    bg: '#fce7f3',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#fce7f3" />
        <ellipse cx="32" cy="20" rx="12" ry="13" fill="#92400e" />
        <path d="M20 24 Q17 36 19 48 Q21 52 24 50 Q22 42 22 32Z" fill="#92400e" />
        <path d="M44 24 Q47 36 45 48 Q43 52 40 50 Q42 42 42 32Z" fill="#92400e" />
        <circle cx="32" cy="22" r="10" fill="#fde8d8" />
        <circle cx="28" cy="21" r="1.5" fill="#374151" />
        <circle cx="36" cy="21" r="1.5" fill="#374151" />
        <path d="M28 25 Q32 28 36 25" stroke="#e07b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M22 34 Q20 44 20 54 Q26 58 32 58 Q38 58 44 54 Q44 44 42 34Z" fill="#f9a8d4" />
        <ellipse cx="33" cy="46" rx="11" ry="12" fill="#fbcfe8" />
        <path d="M33 43 C31 40 27 41 27 45 C27 49 33 53 33 53 C33 53 39 49 39 45 C39 41 35 40 33 43Z" fill="#ffffff" opacity="0.7" />
        <path d="M22 36 Q16 42 18 50 Q20 52 22 50 Q20 44 22 38Z" fill="#f9a8d4" />
        <path d="M42 36 Q48 42 46 50 Q44 52 42 50 Q44 44 42 38Z" fill="#f9a8d4" />
      </svg>
    ),
  },

  'young-woman': {
    bg: '#fdf4ff',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#fdf4ff" />
        <ellipse cx="32" cy="20" rx="12" ry="13" fill="#b45309" />
        <path d="M20 22 Q17 34 20 46 Q22 50 25 48 Q23 40 23 30Z" fill="#b45309" />
        <path d="M44 22 Q47 34 44 46 Q42 50 39 48 Q41 40 41 30Z" fill="#b45309" />
        <circle cx="32" cy="22" r="10" fill="#fde8d8" />
        <circle cx="28" cy="21" r="1.5" fill="#374151" />
        <circle cx="36" cy="21" r="1.5" fill="#374151" />
        <path d="M26.5 19.5 L26 18.5M28 19 L27.5 18M29.5 19.5 L29.5 18.5" stroke="#374151" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M34.5 19.5 L34 18.5M36 19 L35.5 18M37.5 19.5 L37.5 18.5" stroke="#374151" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M28 25 Q32 29 36 25" stroke="#e07b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M22 34 Q20 46 20 56 Q26 60 32 60 Q38 60 44 56 Q44 46 42 34Z" fill="#a78bfa" />
        <path d="M28 34 L32 40 L36 34" stroke="#7c3aed" strokeWidth="1" fill="none" />
      </svg>
    ),
  },

  'baby': {
    bg: '#ecfdf5',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#ecfdf5" />
        <circle cx="32" cy="26" r="14" fill="#fde8d8" />
        <path d="M28 13 Q30 10 32 12 Q34 10 36 13" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="27" cy="25" r="2" fill="#374151" />
        <circle cx="37" cy="25" r="2" fill="#374151" />
        <circle cx="27.8" cy="24.2" r="0.7" fill="#ffffff" />
        <circle cx="37.8" cy="24.2" r="0.7" fill="#ffffff" />
        <circle cx="22" cy="28" r="3" fill="#fca5a5" opacity="0.5" />
        <circle cx="42" cy="28" r="3" fill="#fca5a5" opacity="0.5" />
        <path d="M27 30 Q32 34 37 30" stroke="#e07b6a" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M20 42 Q20 56 32 58 Q44 56 44 42 L40 38 Q36 40 32 40 Q28 40 24 38Z" fill="#6ee7b7" />
        <circle cx="32" cy="54" r="1.5" fill="#059669" />
        <path d="M20 40 Q14 44 16 50 Q18 52 20 50 Q18 46 20 42Z" fill="#6ee7b7" />
        <path d="M44 40 Q50 44 48 50 Q46 52 44 50 Q46 46 44 42Z" fill="#6ee7b7" />
        <circle cx="16" cy="51" r="3" fill="#fde8d8" />
        <circle cx="48" cy="51" r="3" fill="#fde8d8" />
      </svg>
    ),
  },

  'midwife': {
    bg: '#ecfdf5',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#ecfdf5" />
        <ellipse cx="32" cy="18" rx="11" ry="10" fill="#374151" />
        <circle cx="32" cy="12" r="5" fill="#374151" />
        <circle cx="32" cy="22" r="10" fill="#fde8d8" />
        <circle cx="28" cy="21" r="1.5" fill="#374151" />
        <circle cx="36" cy="21" r="1.5" fill="#374151" />
        <path d="M28 25 Q32 29 36 25" stroke="#e07b6a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M22 34 Q20 46 20 56 Q26 60 32 60 Q38 60 44 56 Q44 46 42 34Z" fill="#34d399" />
        <rect x="29" y="36" width="6" height="6" rx="1" fill="#ffffff" opacity="0.9" />
        <rect x="31.5" y="37" width="1" height="4" rx="0.5" fill="#059669" />
        <rect x="30" y="38.5" width="4" height="1" rx="0.5" fill="#059669" />
        <path d="M22 36 Q16 42 18 50 Q20 52 22 50 Q20 44 22 38Z" fill="#34d399" />
        <path d="M42 36 Q48 42 46 50 Q44 52 42 50 Q44 44 42 38Z" fill="#34d399" />
      </svg>
    ),
  },

  'group': {
    bg: '#fffbeb',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#fffbeb" />
        <circle cx="20" cy="22" r="7" fill="#fde8d8" />
        <path d="M20 16 Q14 16 14 22" stroke="#92400e" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M10 42 Q10 34 20 34 Q26 34 28 38" fill="#f9a8d4" />
        <circle cx="44" cy="22" r="7" fill="#fde8d8" />
        <path d="M44 16 Q50 16 50 22" stroke="#374151" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M54 42 Q54 34 44 34 Q38 34 36 38" fill="#93c5fd" />
        <circle cx="32" cy="20" r="8" fill="#fde8d8" />
        <ellipse cx="32" cy="16" rx="8" ry="7" fill="#92400e" />
        <path d="M18 50 Q18 38 32 38 Q46 38 46 50" fill="#a78bfa" />
        <circle cx="29" cy="20" r="1.2" fill="#374151" />
        <circle cx="35" cy="20" r="1.2" fill="#374151" />
        <path d="M29 23 Q32 26 35 23" stroke="#e07b6a" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
}

export default function UserAvatar({ type, size = 44, className = '' }: UserAvatarProps) {
  const cfg = avatars[type]
  return (
    <div
      className={`user-avatar ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {cfg.svg}
    </div>
  )
}
