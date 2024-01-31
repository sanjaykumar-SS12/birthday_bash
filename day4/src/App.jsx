import React from 'react';
import About from './pages/About';
// import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Work from './pages/Work';
import ContactSection from './pages/ContactSection';
import Services from './pages/Services';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './admin/Dashboard';
import Booking from './pages/Bookings';
import Forms from './pages/Forms';
import Profile from './pages/Profile';
// import Admin from './admin/Admin';
// import Booking from './Bookings/Booking'
// import { Provider } from 'react-redux'
// import {store} from './Redux/reducer/store'
function App() {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/bookings' element={<Booking/> }/>
        <Route path='/forms' element={<Forms /> }/>
        <Route path='/profile' element={<Profile /> }/>
        {/* <Route path="/admin" element={<Admin />} /> */}
        
      </Routes>
    </BrowserRouter>
    </div>
   );
}

export default App;