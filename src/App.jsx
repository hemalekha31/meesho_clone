import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './pages/Content';
import Men from './pages/Men';
import Women from './pages/Women';
import Womenwest from './pages/Womenwest';
import Kid from './pages/Kid';
import CartPage from './pages/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter basename="/meesho_clone">
        <Header />
        <Navbar />

        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/home" element={<Content />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/womenwest" element={<Womenwest />} />
            <Route path="/kids" element={<Kid />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
