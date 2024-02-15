import React from 'react';
import Button1 from './Button';

// import BookDialog from './BookDialogue';
import "./Card.css"
import Navbar from '../navbar/Navbar';
function Card() {
    return ( 
        <div>
            <Navbar/>
            <div className='card'>
            <div className="card1">
                <img src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container1">
                    <center>
                    <h4><b>DISNEY THEME</b></h4>
                    <p><i></i></p>
                    <div className='button1'>
                    <Button1/>
                    </div>
                    
                    </center>
                    
                </div>
            </div>
            <div className="card2">
                <img src="https://images.pexels.com/photos/3419646/pexels-photo-3419646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container2">
                    <center>
                    <h4><b>PRIVATE BIRTHDAY PARTY</b></h4>
                    <p><i></i></p>
                    <div className='button1'>
                    <Button1/>
                    </div>
                    </center>

                    
                </div>
            </div>
            <div className="card3">
                <img src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg" alt="Avatar" style={{ width: '100%' }} />
                <div className="container3">
                    <center>
                    <h4><b>BIRTHDAY PARTY</b></h4>
                    <p><i>IN HOUSE CLUBBING</i></p>
                    <div className='button1'>
                    <Button1/>
                    </div>
                    </center>
                    
                </div>
            </div>
        </div>
        </div>
     );
}

export default Card;