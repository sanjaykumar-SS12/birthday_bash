import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import "./Services.css"
export default function Services() {
    const sources=[{"id":1,"name":"Theme ","link":"https://images.pexels.com/photos/7061614/pexels-photo-7061614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,"desc":"Theme based setting,prrovided with costumes can be arranged."},
                    {"id":2,"name":"Photography","link":"https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","desc":"Capture the essence of the celebration that transforms fleeting moments into timeless memories. "},
                    {"id":3,"name":"Food","link":"https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","desc":"we provide food and drinks with wide range of choices to select."}
                ]

    
  return (
    <>
        <Navbar/>
        <div><center><h1 id='s-title'>SERVICES</h1></center></div>
        <div className='services'>
        
        {sources.map(serv=>
            <div className='service'>
                <img src={serv.link}/>
                <h1 id='s-name'>{serv.name}</h1>
               <i><p id='s-desc'>{serv.desc}</p></i> 
            </div>
        )}
        </div>
        <Footer/>
    </>
  )
}
