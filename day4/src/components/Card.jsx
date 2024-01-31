import React from 'react';
import "./Card.css"
function Card() {
    return ( 
        <div>
            <div className='card'>
            <div className="card1">
                <img src="https://images.pexels.com/photos/14772876/pexels-photo-14772876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container1">
                    <center>
                    <h4><b>Bridal Birthday Theme</b></h4>
                    <p><i>Tamara Mahi</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="card2">
                <img src="https://images.pexels.com/photos/13146411/pexels-photo-13146411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container2">
                    <center>
                    <h4><b>PRIVATE PARTY</b></h4>
                    <p><i>Radisson Goa candilom</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="card3">
                <img src="https://images.pexels.com/photos/5805034/pexels-photo-5805034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container3">
                    <center>
                    <h4><b>PRIVATE CELEBRATION</b></h4>
                    <p><i>LeMeridian Coimbatore</i></p>
                    </center>
                    
                </div>
            </div>
            <div className="card4">
                <img src="https://images.pexels.com/photos/224974/pexels-photo-224974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container3">
                    <center>
                    <h4><b>IN HOUSE PARTY</b></h4>
                    <p><i>ville de 1945</i></p>
                    </center>
                    </div>
                    </div>
        </div>
        </div>
     );
}

export default Card;