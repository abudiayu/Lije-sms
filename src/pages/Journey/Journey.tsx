import { useState } from 'react'
import { ChevronLeft, ChevronRight, Baby, Heart, Activity, Pill } from 'lucide-react'
import './Journey.css'

const weekData: Record<number, { size: string; weight: string; fruit: string; desc: string }> = {
  8:  { size: '1.6 cm', weight: '1 g',    fruit: 'Raspberry',  desc: 'Tiny fingers and toes are forming. The heart is beating.' },
  12: { size: '5.4 cm', weight: '14 g',   fruit: 'Lime',       desc: 'Reflexes are developing. Baby can open and close fingers.' },
  16: { size: '11.6 cm', weight: '100 g', fruit: 'Avocado',    desc: 'Baby can hear sounds. Facial features are more defined.' },
  20: { size: '16.4 cm', weight: '300 g', fruit: 'Banana',     desc: 'Baby is moving a lot! You may feel kicks now.' },
  24: { size: '21.5 cm', weight: '650 g', fruit: 'Mango',      desc: 'Lungs are developing. Baby responds to light and sound.' },
  28: { size: '25 cm',   weight: '1 kg',  fruit: 'Eggplant',   desc: 'Baby can blink and has eyelashes. Brain is growing fast.' },
  32: { size: '28 cm',   weight: '1.7 kg', fruit: 'Squash',    desc: 'Baby is practicing breathing. Bones are hardening.' },
  36: { size: '32 cm',   weight: '2.6 kg', fruit: 'Papaya',    desc: 'Baby is almost ready! Most organs are fully developed.' },
  40: { size: '36 cm',   weight: '3.4 kg', fruit: 'Watermelon', desc: 'Full term! Baby is ready to meet you.' },
}

const trackerItems = [
  { id: 'kicks', label: 'Baby Kicks', icon: Baby, color: '#6366f1', bg: '#eef2ff', count: 12 },
  { id: 'bp', label: 'Blood Pressure', icon: Activity, color: '#ec4899', bg: '#fdf2f8', value: '120/80' },
  { id: 'weight', label: 'My Weight', icon: Heart, color: '#10b981', bg: '#ecfdf5', value: '68 kg' },
  { id: 'meds', label: 'Medications', icon: Pill, color: '#8b5cf6', bg: '#f5f3ff', count: 2 },
]

export default function Journey() {
  const [currentWeek, setCurrentWeek] = useState(24)
  const weeks = Object.keys(weekData).map(Number).sort((a, b) => a - b)
  const data = weekData[currentWeek] || weekData[24]

  const prev = () => {
    const idx = weeks.indexOf(currentWeek)
    if (idx > 0) setCurrentWeek(weeks[idx - 1])
  }
  const next = () => {
    const idx = weeks.indexOf(currentWeek)
    if (idx < weeks.length - 1) setCurrentWeek(weeks[idx + 1])
  }

  return (
    <div className="journey">
      <div className="journey__header">
        <h1 className="journey__title">My Journey</h1>
        <p className="journey__subtitle">Track your pregnancy week by week</p>
      </div>

      <div className="journey__week-nav">
        <button className="journey__nav-btn" onClick={prev} disabled={weeks.indexOf(currentWeek) === 0}>
          <ChevronLeft size={20} />
        </button>
        <div className="journey__week-display">
          <span className="journey__week-num">Week {currentWeek}</span>
          <span className="journey__week-label">of 40</span>
        </div>
        <button className="journey__nav-btn" onClick={next} disabled={weeks.indexOf(currentWeek) === weeks.length - 1}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="journey__week-card">
        <div className="journey__week-info">
          <div className="journey__week-stat">
            <span className="journey__stat-label">Size</span>
            <span className="journey__stat-val">{data.size}</span>
          </div>
          <div className="journey__week-fruit">
            <span className="journey__fruit-emoji">🍋</span>
            <span className="journey__fruit-name">{data.fruit}</span>
          </div>
          <div className="journey__week-stat">
            <span className="journey__stat-label">Weight</span>
            <span className="journey__stat-val">{data.weight}</span>
          </div>
        </div>
        <p className="journey__week-desc">{data.desc}</p>
      </div>

      <div className="journey__progress-section">
        <h3 className="journey__section-title">Trimester Progress</h3>
        <div className="journey__trimesters">
          {[
            { label: '1st Trimester', range: 'Weeks 1–13', done: currentWeek > 13, active: currentWeek <= 13 },
            { label: '2nd Trimester', range: 'Weeks 14–27', done: currentWeek > 27, active: currentWeek >= 14 && currentWeek <= 27 },
            { label: '3rd Trimester', range: 'Weeks 28–40', done: currentWeek > 40, active: currentWeek >= 28 },
          ].map((t) => (
            <div key={t.label} className={`journey__trimester ${t.active ? 'journey__trimester--active' : ''} ${t.done ? 'journey__trimester--done' : ''}`}>
              <div className="journey__trimester-dot" />
              <div>
                <p className="journey__trimester-name">{t.label}</p>
                <p className="journey__trimester-range">{t.range}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="journey__tracker">
        <h3 className="journey__section-title">Health Tracker</h3>
        <div className="journey__tracker-grid">
          {trackerItems.map((item) => (
            <div
              key={item.id}
              className="journey__tracker-item"
              style={{ '--item-color': item.color, '--item-bg': item.bg } as React.CSSProperties}
            >
              <div className="journey__tracker-icon">
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <p className="journey__tracker-label">{item.label}</p>
              <p className="journey__tracker-value">
                {item.count !== undefined ? item.count : item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
