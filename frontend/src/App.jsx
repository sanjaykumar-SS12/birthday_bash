import { useState, } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Services from './services/Services'
import Login from './login/Login'
import Signup from './signup/Signup'
import Gallery from './gallery/Gallery'
import Venues from './venues/Venues'
import { Provider } from 'react-redux';
import {store} from "./redux/reducer/store" 
import Bookings from './bookings/Bookings'
// import Admin from './admin/Admin'
// import ApproveBookings from './admin/ApproveBookings'
// import DeleteBookings from './admin/DeleteBookings'
// import ViewBookings from './admin/ViewBookings'
// import ApprovedBookings from './bookings/ApprovedBookings'
import { UserContext } from './context/context'
import Contact from './contact/Contact'
import VenueForm from './crudAdmin/VenueForm'
import EventForm from './crudAdmin/EventForm'
import Dashboard from './admin/DashBoard'
import Party from './admin/Party'
import VenueAddForm from './VenueAddForm/VenueAddForm'
import Card from './Card/Card'

// import HomeNavbar from './navbar/HomeNavbar'


function App() {


  const[pop,setPop]=useState(false);

  return (
    <>
    <Provider store={store}>
      <UserContext.Provider  value={[pop,setPop]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/nav' element={<Navbar />}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          {/* <Route path="/admin" element={<Admin/>}></Route> */}
          <Route path='/photos' element={<Gallery/>}></Route>
          <Route path='/venues' element={<Venues/>}></Route>
          {/* <Route path='/theme' element={<Theme/>}></Route> */}
          {/* <Route path='/additional' element={<Additional/>}></Route> */}
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/bookings' element={<Bookings/>}></Route>
          <Route path='/themes' element={<Card/>}></Route>
          {/* <Route path='/approveBookings' element={<ApproveBookings/>}></Route>
          <Route path='/approvedBookings' element={<ApprovedBookings/>}></Route>
          <Route path='/deleteBookings' element={<DeleteBookings/>}></Route>
          <Route path='/viewBookings' element={<ViewBookings/>}></Route> */}
          <Route path='/venueForm' element={<VenueForm/>}></Route>
          <Route path='/eventForm' element={<EventForm/>}></Route>
          <Route path='/venueaddform' element={<VenueAddForm/>}></Route>
          <Route path='/partyaddform' element={<Party/>}></Route>
          
        </Routes>

      </BrowserRouter>
      </UserContext.Provider>
      </Provider>
    </>
  )
}

export default App
