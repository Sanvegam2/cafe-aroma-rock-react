import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import './styles/style.css'


// Mantener solo rutas: Home (/), Login (/login), Register (/register)
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contactenos" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>

      <ChatWidget />
    </>
  )
}


