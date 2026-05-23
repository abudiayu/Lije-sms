import { useState } from 'react'
import { Calendar, Clock, MapPin, Plus, Video } from 'lucide-react'
import UserAvatar, { UserAvatarType } from '../../components/UserAvatar/UserAvatar'
import './Appointments.css'

const appointments: {
  id: number; doctor: string; specialty: string; date: string; time: string
  type: string; location: string; status: string; avatarType: UserAvatarType
}[] = [
  {
    id: 1,
    doctor: 'Dr. Amina Kedir',
    specialty: 'OB-GYN',
    date: 'June 5, 2025',
    time: '10:00 AM',
    type: 'In-Person',
    location: 'Tikur Anbessa Hospital',
    status: 'upcoming',
    avatarType: 'female-doctor',
  },
  {
    id: 2,
    doctor: 'Dr. Yonas Tesfaye',
    specialty: 'Nutritionist',
    date: 'June 12, 2025',
    time: '2:30 PM',
    type: 'Video Call',
    location: 'Online',
    status: 'upcoming',
    avatarType: 'male-doctor',
  },
  {
    id: 3,
    doctor: 'Dr. Amina Kedir',
    specialty: 'OB-GYN',
    date: 'May 10, 2025',
    time: '11:00 AM',
    type: 'In-Person',
    location: 'Tikur Anbessa Hospital',
    status: 'completed',
    avatarType: 'female-doctor',
  },
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']

export default function Appointments() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')
  const [showBook, setShowBook] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const filtered = appointments.filter((a) =>
    activeTab === 'upcoming' ? a.status === 'upcoming' : a.status === 'completed'
  )

  return (
    <div className="appointments">
      <div className="appointments__header">
        <h1 className="appointments__title">Appointments</h1>
        <button className="appointments__add-btn" onClick={() => setShowBook(true)}>
          <Plus size={18} strokeWidth={2.5} />
        </button>
      </div>

      <div className="appointments__tabs">
        <button
          className={`appointments__tab ${activeTab === 'upcoming' ? 'appointments__tab--active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`appointments__tab ${activeTab === 'past' ? 'appointments__tab--active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past
        </button>
      </div>

      <div className="appointments__list">
        {filtered.length === 0 && (
          <div className="appointments__empty">
            <span className="appointments__empty-icon">📅</span>
            <p>No {activeTab} appointments</p>
          </div>
        )}
        {filtered.map((appt) => (
          <div key={appt.id} className="appointment-card">
            <div className="appointment-card__top">
              <UserAvatar type={appt.avatarType} size={50} className="appointment-card__avatar" />
              <div className="appointment-card__info">
                <p className="appointment-card__doctor">{appt.doctor}</p>
                <p className="appointment-card__specialty">{appt.specialty}</p>
              </div>
              <span className={`appointment-card__type ${appt.type === 'Video Call' ? 'appointment-card__type--video' : ''}`}>
                {appt.type === 'Video Call' ? <Video size={12} /> : null}
                {appt.type}
              </span>
            </div>
            <div className="appointment-card__details">
              <span className="appointment-card__detail">
                <Calendar size={13} strokeWidth={2} />
                {appt.date}
              </span>
              <span className="appointment-card__detail">
                <Clock size={13} strokeWidth={2} />
                {appt.time}
              </span>
              <span className="appointment-card__detail">
                <MapPin size={13} strokeWidth={2} />
                {appt.location}
              </span>
            </div>
            {appt.status === 'upcoming' && (
              <div className="appointment-card__actions">
                <button className="appointment-card__btn appointment-card__btn--outline">Reschedule</button>
                <button className="appointment-card__btn appointment-card__btn--primary">Join / View</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showBook && (
        <div className="appointments__modal-overlay" onClick={() => setShowBook(false)}>
          <div className="appointments__modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="appointments__modal-title">Book Appointment</h3>
            <p className="appointments__modal-label">Select a time slot</p>
            <div className="appointments__slots">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  className={`appointments__slot ${selectedSlot === slot ? 'appointments__slot--active' : ''}`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              className="appointments__confirm-btn"
              onClick={() => setShowBook(false)}
              disabled={!selectedSlot}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
