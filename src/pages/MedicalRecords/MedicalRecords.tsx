import { useState, useRef } from 'react'
import { FileText, Download, Eye, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react'
import './MedicalRecords.css'

interface Record {
  id: number
  title: string
  date: string
  type: string
  icon: string
  color: string
  bg: string
  fileUrl?: string
  fileName?: string
  fileType?: string
}

const initialRecords: Record[] = [
  { id: 1, title: 'Blood Test Results', date: 'May 15, 2025', type: 'Lab Report', icon: '🧪', color: '#6366f1', bg: '#eef2ff' },
  { id: 2, title: 'Ultrasound Scan – Week 20', date: 'May 2, 2025', type: 'Scan', icon: '🔬', color: '#ec4899', bg: '#fdf2f8' },
  { id: 3, title: 'Iron Supplement Prescription', date: 'April 28, 2025', type: 'Prescription', icon: '💊', color: '#10b981', bg: '#ecfdf5' },
  { id: 4, title: 'Glucose Tolerance Test', date: 'April 10, 2025', type: 'Lab Report', icon: '🧬', color: '#f59e0b', bg: '#fffbeb' },
  { id: 5, title: 'Prenatal Vitamins Rx', date: 'March 20, 2025', type: 'Prescription', icon: '💊', color: '#8b5cf6', bg: '#f5f3ff' },
]

const CATEGORIES = ['All', 'Lab Reports', 'Scans', 'Prescriptions']

export default function MedicalRecords() {
  const [records, setRecords] = useState<Record[]>(initialRecords)
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewRecord, setViewRecord] = useState<Record | null>(null)
  const [zoom, setZoom] = useState(1)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categoryCounts: Record<string, number> = {
    All: records.length,
    'Lab Reports': records.filter(r => r.type === 'Lab Report').length,
    Scans: records.filter(r => r.type === 'Scan').length,
    Prescriptions: records.filter(r => r.type === 'Prescription').length,
  }

  const filtered = activeCategory === 'All'
    ? records
    : records.filter(r => {
        if (activeCategory === 'Lab Reports') return r.type === 'Lab Report'
        if (activeCategory === 'Scans') return r.type === 'Scan'
        if (activeCategory === 'Prescriptions') return r.type === 'Prescription'
        return true
      })

  // ── Upload ────────────────────────────────────────────────────────────────
  const handleUploadClick = () => fileInputRef.current?.click()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
    const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)
    const isPdf = ext === 'pdf'

    const typeGuess = file.name.toLowerCase().includes('prescription')
      ? 'Prescription'
      : file.name.toLowerCase().includes('scan') || isImage
      ? 'Scan'
      : 'Lab Report'

    const iconMap: Record<string, string> = { Prescription: '💊', Scan: '🔬', 'Lab Report': '🧪' }
    const colorMap: Record<string, string> = { Prescription: '#8b5cf6', Scan: '#ec4899', 'Lab Report': '#6366f1' }
    const bgMap: Record<string, string> = { Prescription: '#f5f3ff', Scan: '#fdf2f8', 'Lab Report': '#eef2ff' }

    const newRecord: Record = {
      id: Date.now(),
      title: file.name.replace(/\.[^.]+$/, ''),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      type: typeGuess,
      icon: iconMap[typeGuess],
      color: colorMap[typeGuess],
      bg: bgMap[typeGuess],
      fileUrl: url,
      fileName: file.name,
      fileType: isImage ? 'image' : isPdf ? 'pdf' : 'other',
    }

    setRecords(prev => [newRecord, ...prev])
    e.target.value = ''
  }

  // ── Download ──────────────────────────────────────────────────────────────
  const handleDownload = (rec: Record) => {
    if (rec.fileUrl) {
      const a = document.createElement('a')
      a.href = rec.fileUrl
      a.download = rec.fileName ?? rec.title
      a.click()
    } else {
      // Generate a simple text file for demo records without real files
      const content = `Record: ${rec.title}\nType: ${rec.type}\nDate: ${rec.date}`
      const blob = new Blob([content], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${rec.title}.txt`
      a.click()
      URL.revokeObjectURL(url)
    }
  }

  // ── View ──────────────────────────────────────────────────────────────────
  const handleView = (rec: Record) => {
    setViewRecord(rec)
    setZoom(1)
  }

  const closeModal = () => {
    setViewRecord(null)
    setZoom(1)
  }

  const currentIdx = viewRecord ? filtered.findIndex(r => r.id === viewRecord.id) : -1
  const goNext = () => {
    if (currentIdx < filtered.length - 1) { setViewRecord(filtered[currentIdx + 1]); setZoom(1) }
  }
  const goPrev = () => {
    if (currentIdx > 0) { setViewRecord(filtered[currentIdx - 1]); setZoom(1) }
  }

  return (
    <div className="medical-records">
      {/* Header */}
      <div className="medical-records__header">
        <h1 className="medical-records__title">Medical Records</h1>
        <button className="medical-records__upload-btn" onClick={handleUploadClick}>
          <FileText size={18} strokeWidth={2} />
          Upload
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.txt,.doc,.docx"
          className="medical-records__file-input"
          onChange={handleFileChange}
        />
      </div>

      {/* Categories */}
      <div className="medical-records__categories">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`medical-records__cat${activeCategory === cat ? ' medical-records__cat--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <span className="medical-records__cat-count">{categoryCounts[cat]}</span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="medical-records__list">
        {filtered.length === 0 && (
          <p className="medical-records__empty">No records in this category yet.</p>
        )}
        {filtered.map(rec => (
          <div key={rec.id} className="record-card">
            <div className="record-card__icon" style={{ background: rec.bg, color: rec.color }}>
              <span>{rec.icon}</span>
            </div>
            <div className="record-card__info">
              <p className="record-card__title">{rec.title}</p>
              <div className="record-card__meta">
                <span className="record-card__type" style={{ color: rec.color, background: rec.bg }}>
                  {rec.type}
                </span>
                <span className="record-card__date">{rec.date}</span>
              </div>
            </div>
            <div className="record-card__actions">
              <button
                className="record-card__action-btn record-card__action-btn--view"
                aria-label="View"
                title="View record"
                onClick={() => handleView(rec)}
              >
                <Eye size={16} strokeWidth={2} />
              </button>
              <button
                className="record-card__action-btn record-card__action-btn--download"
                aria-label="Download"
                title="Download record"
                onClick={() => handleDownload(rec)}
              >
                <Download size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {viewRecord && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal__header" style={{ borderColor: viewRecord.color }}>
              <div className="modal__icon" style={{ background: viewRecord.bg, color: viewRecord.color }}>
                {viewRecord.icon}
              </div>
              <div className="modal__header-info">
                <h2 className="modal__title">{viewRecord.title}</h2>
                <div className="modal__meta">
                  <span className="modal__type" style={{ color: viewRecord.color, background: viewRecord.bg }}>
                    {viewRecord.type}
                  </span>
                  <span className="modal__date">{viewRecord.date}</span>
                </div>
              </div>
              <button className="modal__close" onClick={closeModal} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal__body">
              {viewRecord.fileUrl && viewRecord.fileType === 'image' ? (
                <div className="modal__image-wrap">
                  <div className="modal__zoom-controls">
                    <button onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} title="Zoom out"><ZoomOut size={16}/></button>
                    <span>{Math.round(zoom * 100)}%</span>
                    <button onClick={() => setZoom(z => Math.min(3, z + 0.25))} title="Zoom in"><ZoomIn size={16}/></button>
                  </div>
                  <div className="modal__image-scroll">
                    <img
                      src={viewRecord.fileUrl}
                      alt={viewRecord.title}
                      style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
                      className="modal__image"
                    />
                  </div>
                </div>
              ) : viewRecord.fileUrl && viewRecord.fileType === 'pdf' ? (
                <iframe
                  src={viewRecord.fileUrl}
                  title={viewRecord.title}
                  className="modal__pdf"
                />
              ) : (
                <div className="modal__detail-card">
                  <div className="modal__detail-row">
                    <span className="modal__detail-label">Record Name</span>
                    <span className="modal__detail-value">{viewRecord.title}</span>
                  </div>
                  <div className="modal__detail-row">
                    <span className="modal__detail-label">Category</span>
                    <span className="modal__detail-value">{viewRecord.type}</span>
                  </div>
                  <div className="modal__detail-row">
                    <span className="modal__detail-label">Date</span>
                    <span className="modal__detail-value">{viewRecord.date}</span>
                  </div>
                  <div className="modal__detail-row">
                    <span className="modal__detail-label">File</span>
                    <span className="modal__detail-value modal__detail-value--muted">
                      {viewRecord.fileName ?? 'Demo record — upload a real file to preview'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="modal__footer">
              <div className="modal__nav">
                <button
                  className="modal__nav-btn"
                  onClick={goPrev}
                  disabled={currentIdx <= 0}
                  title="Previous record"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
                <span className="modal__nav-count">{currentIdx + 1} / {filtered.length}</span>
                <button
                  className="modal__nav-btn"
                  onClick={goNext}
                  disabled={currentIdx >= filtered.length - 1}
                  title="Next record"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
              <button
                className="modal__download-btn"
                onClick={() => handleDownload(viewRecord)}
                style={{ background: viewRecord.color }}
              >
                <Download size={16} /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}