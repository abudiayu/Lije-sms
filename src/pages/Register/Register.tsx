import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import './Register.css'

export default function Register() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [role, setRole] = useState<'mother' | 'doctor'>('mother')
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="register">
      <div className="register__bg">
        <div className="register__blob register__blob--1" />
        <div className="register__blob register__blob--2" />
      </div>

      <div className="register__content">
        <h1 className="register__title">Create Account</h1>
        <p className="register__subtitle">Join Mother's Connect today</p>

        <div className="register__role-tabs">
          <button
            className={`register__role-tab ${role === 'mother' ? 'register__role-tab--active' : ''}`}
            onClick={() => setRole('mother')}
          >
            🤰 Mother
          </button>
          <button
            className={`register__role-tab ${role === 'doctor' ? 'register__role-tab--active' : ''}`}
            onClick={() => setRole('doctor')}
          >
            👩‍⚕️ Doctor
          </button>
        </div>

        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__field">
            <label className="register__label">Full Name</label>
            <div className="register__input-wrap">
              <User size={18} className="register__input-icon" strokeWidth={1.8} />
              <input
                type="text"
                className="register__input"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="register__field">
            <label className="register__label">Email</label>
            <div className="register__input-wrap">
              <Mail size={18} className="register__input-icon" strokeWidth={1.8} />
              <input
                type="email"
                className="register__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="register__field">
            <label className="register__label">Phone Number</label>
            <div className="register__input-wrap">
              <Phone size={18} className="register__input-icon" strokeWidth={1.8} />
              <input
                type="tel"
                className="register__input"
                placeholder="+251 91 234 5678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="register__field">
            <label className="register__label">Password</label>
            <div className="register__input-wrap">
              <Lock size={18} className="register__input-icon" strokeWidth={1.8} />
              <input
                type={showPass ? 'text' : 'password'}
                className="register__input"
                placeholder="Create a strong password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="register__eye-btn"
                onClick={() => setShowPass(!showPass)}
                aria-label="Toggle password"
              >
                {showPass ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
              </button>
            </div>
          </div>

          <button type="submit" className="register__submit-btn">Create Account</button>

          <div className="register__divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="register__google-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
        </form>

        <p className="register__login-link">
          Already have an account?{' '}
          <Link to="/login" className="register__link">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
