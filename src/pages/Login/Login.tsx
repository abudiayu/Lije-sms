import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import logoImg from '../../assets/logimg.png'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="login">
      <div className="login__bg">
        <div className="login__blob login__blob--1" />
        <div className="login__blob login__blob--2" />
      </div>

      <div className="login__content">
        <div className="login__logo">
          <img src={logoImg} alt="Mother's Connect" className="login__logo-img" />
        </div>

        <h1 className="login__title">Welcome Back</h1>
        <p className="login__subtitle">Sign in to Mother's Connect</p>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label">Email</label>
            <div className="login__input-wrap">
              <Mail size={18} className="login__input-icon" strokeWidth={1.8} />
              <input
                type="email"
                className="login__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="login__field">
            <label className="login__label">Password</label>
            <div className="login__input-wrap">
              <Lock size={18} className="login__input-icon" strokeWidth={1.8} />
              <input
                type={showPass ? 'text' : 'password'}
                className="login__input"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="login__eye-btn"
                onClick={() => setShowPass(!showPass)}
                aria-label="Toggle password"
              >
                {showPass ? <EyeOff size={16} strokeWidth={2} /> : <Eye size={16} strokeWidth={2} />}
              </button>
            </div>
          </div>

          <button type="button" className="login__forgot">Forgot password?</button>

          <button type="submit" className="login__submit-btn">Sign In</button>

          <div className="login__divider">
            <span>or continue with</span>
          </div>

          <button type="button" className="login__google-btn">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
        </form>

        <p className="login__register-link">
          Don't have an account?{' '}
          <Link to="/register" className="login__link">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
