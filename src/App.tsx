import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Home from './pages/Home/Home'
import Journey from './pages/Journey/Journey'
import Community from './pages/Community/Community'
import Messages from './pages/Messages/Messages'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Appointments from './pages/Appointments/Appointments'
import MedicalRecords from './pages/MedicalRecords/MedicalRecords'
import Settings from './pages/Settings/Settings'
import SplashScreen from './components/SplashScreen/SplashScreen'
import { Error } from './pages/Error/Error'
import './App.css'

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const handleSplashFinish = useCallback(() => setSplashDone(true), [])

  if (!splashDone) {
    return <SplashScreen onFinish={handleSplashFinish} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="journey" element={<Journey />} />
          <Route path="community" element={<Community />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-records" element={<MedicalRecords />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path = "*" element = {<Error/>}/>      
      </Routes>
    </BrowserRouter>
  )
}

export default App
