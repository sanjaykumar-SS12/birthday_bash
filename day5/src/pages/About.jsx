import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
// import Pricing from '../components/Pricing';
import "./About.css";
function About() {
    return ( 
        <div>
            <NavBar/>
            <div className='abt-whole'>
            <div className='abt'>
                <h2>COMMITTED TO EXECELLENCE</h2>
                <p>Birthday Bash is a coimbatore based party planning company that specializes in creating unique and memorable events.we pride ourselves on our ability to listen to our clients and organizers</p>
                <p>From location planning to games and photoshoots,we take care of every details to ensure that your event is truly unforgettable experience.</p>
            </div>
                <div className='aimg'>
                    <img id='img-abt' src="https://images.pexels.com/photos/8845837/pexels-photo-8845837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            {/* <Pricing/>
            <div className='abt-container'>
                <img id='a-img' src="https://static.wixstatic.com/media/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg/v1/fill/w_2620,h_880,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_6471dd55fbd445939f4cb811bd9eaa14~mv2.jpeg" alt="" />
                <div className='a-text'>
                <h1>WORKING HOURS</h1>
                <p><i>Contact us Today</i></p>
                <p>M-F: 8am-8pm</p>
                </div>
            </div>
            <Footer/> */}
        </div>
     );
}

export default About;