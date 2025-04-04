import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Search from './pages/Search'
import Smartlist from './pages/Smartlist'
import MyCart from './pages/MyCart'
import QRcode from './pages/QRcode'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Member from './Login/Member'

function App() {
  const location = useLocation();
  const hideNavPaths = ["/", "/login", "/signup"];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Member />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/smartlist" element={<Smartlist />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      {!hideNavPaths.includes(location.pathname) && <Nav />}
      <Footer />
    </BrowserRouter>
  )
}

export default App
