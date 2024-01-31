import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import "./Services.css";
function Services() {
    return ( 
        <div>
            <NavBar/>
            <div className='s-title'>
                <center>
                    <h1> SERVICES</h1>
                    <p><i></i></p>
                </center>
            </div>
            <div className='s-card'>
            <div className="s-card1">
                <img src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container1">
                    <center>
                    <h4><b>mask theme</b></h4>
                    <p><i></i></p>
                    </center>
                    
                </div>
            </div>
            <div className="s-card2">
                <img src="https://images.pexels.com/photos/7100335/pexels-photo-7100335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container2">
                    <center>
                    <h4><b>kids theme</b></h4>
                    <p><i>Themes preference can be selected</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="s-card3">
                <img src="https://images.pexels.com/photos/696214/pexels-photo-696214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container3">
                    <center>
                    <h4><b>Dine out</b></h4>
                    <p><i>location can be selected</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="s-card4">
                <img src="https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="s-container4">
                    <center>
                    <h4><b>Boat house Karoke</b></h4>
                    <p><i></i></p>
                    </center>
                    
                </div>
                </div>       
                </div>
        <Footer/>
        </div>
     );
}

export default Services;