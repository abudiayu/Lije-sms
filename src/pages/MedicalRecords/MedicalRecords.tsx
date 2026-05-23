import { FileText, Download, Eye } from 'lucide-react'
import './MedicalRecords.css'

const records = [
  { id: 1, title: 'Blood Test Results', date: 'May 15, 2025', type: 'Lab Report', icon: '🧪', color: '#6366f1', bg: '#eef2ff' },
  { id: 2, title: 'Ultrasound Scan – Week 20', date: 'May 2, 2025', type: 'Scan', icon: '🔬', color: '#ec4899', bg: '#fdf2f8' },
  { id: 3, title: 'Iron Supplement Prescription', date: 'April 28, 2025', type: 'Prescription', icon: '💊', color: '#10b981', bg: '#ecfdf5' },
  { id: 4, title: 'Glucose Tolerance Test', date: 'April 10, 2025', type: 'Lab Report', icon: '🧬', color: '#f59e0b', bg: '#fffbeb' },
  { id: 5, title: 'Prenatal Vitamins Rx', date: 'March 20, 2025', type: 'Prescription', icon: '💊', color: '#8b5cf6', bg: '#f5f3ff' },
]

const categories = [
  { label: 'All', count: 12 },
  { label: 'Lab Reports', count: 5 },
  { label: 'Scans', count: 3 },
  { label: 'Prescriptions', count: 4 },
]

export default function MedicalRecords() {
  return (
    <div className="medical-records">
      <div className="medical-records__header">
        <h1 className="medical-records__title">Medical Records</h1>
        <button className="medical-records__upload-btn">
          <FileText size={18} strokeWidth={2} />
          Upload
        </button>
      </div>

      <div className="medical-records__categories">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            className={`medical-records__cat ${i === 0 ? 'medical-records__cat--active' : ''}`}
          >
            {cat.label}
            <span className="medical-records__cat-count">{cat.count}</span>
          </button>
        ))}
      </div>

      <div className="medical-records__list">
        {records.map((rec) => (
          <div key={rec.id} className="record-card">
            <div
              className="record-card__icon"
              style={{ background: rec.bg, color: rec.color }}
            >
              <span>{rec.icon}</span>
            </div>
            <div className="record-card__info">
              <p className="record-card__title">{rec.title}</p>
              <div className="record-card__meta">
                <span
                  className="record-card__type"
                  style={{ color: rec.color, background: rec.bg }}
                >
                  {rec.type}
                </span>
                <span className="record-card__date">{rec.date}</span>
              </div>
            </div>
            <div className="record-card__actions">
              <button className="record-card__action-btn" aria-label="View">
                <Eye size={16} strokeWidth={2} />
              </button>
              <button className="record-card__action-btn" aria-label="Download">
                <Download size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
