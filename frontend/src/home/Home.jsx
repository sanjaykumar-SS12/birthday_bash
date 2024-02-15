import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const navServices = () => {
    navigate("/services");
  };

  return (
    <>
      <Navbar />
      <main className='home'>
        <section className='himg'>
          <img src='https://images.pexels.com/photos/5816094/pexels-photo-5816094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Home Background' />
        </section>
        <section className='hserv'>
          <div className='serv'>
            <h2>
              <span>OUR</span>
              <span>SERVICES</span>
            </h2>
            <h3>
              <span>Turn your birthday</span>
              <span>party into a wishful event</span>
            </h3>
            <button onClick={navServices}>
              Discover
            </button>
          </div>
          <div className='servimg'>
            <img src='https://images.pexels.com/photos/7180794/pexels-photo-7180794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Service Image' />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
