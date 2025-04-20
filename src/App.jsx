import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Search from './pages/Search'
import MyCart from './pages/MyCart'
import QRcode from './QRcode/QRcode'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Member from './Login/Member'
import SmartlistCalculator from './pages/SmartlistCalculator'
import SmartlistPreferences from './pages/SmartlistPreferences'
import Point from './QRcode/Point'

function App() {
  const location = useLocation();
  const hideNavPaths = ["/", "/login", "/signup"];

  return (
    <>
      <main className="container page-bottom">
        <Routes>
            <Route path="/" element={<Member />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/qrcode" element={<Point />} />
            <Route path="/scan" element={<QRcode />} />
            <Route path="/calculator" element={<SmartlistCalculator />} />
            <Route path="/smartlist" element={<SmartlistPreferences />} />
        </Routes>
        {!hideNavPaths.includes(location.pathname) && <Nav />}
      </main>
      <Footer/>
    </>
  )
}

export default App
