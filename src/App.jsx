import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Chatbot />
    </div>
  )
}
