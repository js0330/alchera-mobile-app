import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SettingsProvider } from './context/SettingsContext'
import MobileLayout from './components/layout/MobileLayout'
import Home from './pages/Home'
import Alerts from './pages/Alerts'
import Facilities from './pages/Facilities'
import Complaints from './pages/Complaints'
import Profile from './pages/Profile'

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <MobileLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </MobileLayout>
      </BrowserRouter>
    </SettingsProvider>
  )
}

export default App
