import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Content from './pages/Content'
import Men from './pages/Men'
import Kid from './pages/Kid'
import Women from './pages/Women'
import Womenwest from './pages/Womenwest'

function App() {
  return (
    <BrowserRouter basename="/my_app_meesho">
  <Header />
  <Navbar />

  <main style={{ minHeight: "80vh", padding: "1rem" }}>
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/home" element={<Content />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kid />} />
      <Route path="/womenwest" element={<Womenwest />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  </main>

  <Footer />
</BrowserRouter>

  )
}

export default App
