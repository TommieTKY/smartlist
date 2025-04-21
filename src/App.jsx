import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'

import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Search from './pages/Search'
import MyCart from './pages/MyCart'
import Login from './Login/Login'
import Signup from './Login/Signup'
import Member from './Login/Member'
import SmartlistCalculator from './pages/SmartlistCalculator'
import SmartlistPreferences from './pages/SmartlistPreferences'
import Point from './QRcode/Point'
import Scan from './QRcode/Scan'
import Opening from './opening/Opening'
import Carousel from './opening/Carousel'

function App() {
  const location = useLocation();
  const hideNavPaths = ["/", "/carousel", "/member", "/login", "/signup"];

  return (
    <div id="webpage">
      <main className="container">
        <Routes>
            <Route path="/" element={<Opening />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/member" element={<Member />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/qrcode" element={<Point />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/calculator" element={<SmartlistCalculator />} />
            <Route path="/smartlist" element={<SmartlistPreferences />} />
        </Routes>
        {!hideNavPaths.includes(location.pathname) && <Nav />}
      </main>
      {hideNavPaths.includes(location.pathname) && <Footer />}
    </div>
  )
}

export default App
