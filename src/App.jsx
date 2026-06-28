import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import PageLayout from './components/PageLayout.jsx'
import './styles/style.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactenos" element={<ContactPage />} />

          {/* Placeholder para Menú y Sobre nosotros (a completar si existen páginas) */}
          <Route path="/menu" element={<HomePage />} />
          <Route path="/nosotros" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ChatWidget />
    </>
  )
}



