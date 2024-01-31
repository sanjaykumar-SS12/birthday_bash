import React from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import "./Home.css";

// Import the video file using the correct path relative to your project structure
import vid from "../assets/vid.mp4";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className='home-container'>
        <video id='homevideo1' autoPlay muted loop>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className='text'>BIRTHDAY BASH</h1>
        <p id='p1' onClick={() => navigate('/about')}>Support</p>
      </div>
      {/* <div className='sub1-container'>
        <h2 id='subscribe'>Subscribe Form</h2>
        <input type="email" id="emailhome" name="email" placeholder=' eg.,email@example.com' />
        <button id='buttonhome' type="submit">Join</button>
      </div> */}
      <div className="hevents">
        <h1>EVENTS</h1>
        <p><i>Committed For Excellence</i></p>
      </div>
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
