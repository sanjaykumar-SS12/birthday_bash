import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import ApprovedBookings from './ApprovedBookings';
import Footer from '../footer/Footer';
import './Bookings.css';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [num, setNum] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8081/api/v1/auth/booking")
      .then((response) => {
        setBookings(response.data);
        if (response.data.length === 0) {
          setNum(false);
        } else {
          setNum(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const handleBook = (venue) => {
    axios.post("http://localhost:8081/api/v1/auth/booking", venue)
      .then((response) => {
        console.log('Booking successful:', response.data);
        setBookings([...bookings, response.data]); // Update the bookings state with the new booking
      })
      .catch((error) => {
        console.error('Error booking venue:', error);
      });
  };

  return (
    <div className='h'>
      <Navbar />
      <div>
        <center><h1 id='s-title'>PENDING BOOKINGS</h1></center>
      </div>
      {num ?
        <div className='bookings'>
          {bookings.map(venue =>
            <div className='venue' key={venue.id}>
              <img src={venue.link} alt={venue.name} />
              <h1 id='s-name'>{venue.name}</h1>
              <p id='s-price'>₹{venue.price}</p>
              <p id='s-price'>{venue.location}</p>
              <button onClick={() => handleBook(venue)}>Book</button>
            </div>
          )}
        </div> : <div>No bookings</div>
      }
      <ApprovedBookings />
      <Footer />
    </div>
  );
}
