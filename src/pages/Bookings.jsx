import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { booking } from '../data/Booking';
import './Booking.css';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router';
export default function Booking() {
  const navigate=useNavigate();
  const routeChange=()=>{
    navigate("/forms");
  }
  
  return (
    
    

    // {
    //     booking.map((items)=> <Card sx={{ maxWidth: 345 }}>
    //     <CardMedia
    //       sx={{ height: 140 }}
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       title="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Share</Button>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>)
    // }
   <>
   <NavBar/>
      
   {
    booking.map((items)=> 
      
      <Card>
         <CardMedia
           sx={{ height:500,width:800,marginLeft:'30%' }}

    
           image={items.img}
           title="green iguana"
         />
         <CardContent
                    sx={{ marginLeft:'30%' }}
                    >
           <Typography gutterBottom variant="h5" component="div">
            price: {items.price}
            
           </Typography>
           <Typography variant="body2" color="text.secondary">
              
           </Typography>
         </CardContent>
         <CardActions sx={{ marginLeft:'30%' }}>
           <Button  size="small" onClick={routeChange}>BookNow</Button>
          
         </CardActions>
       </Card>)

 
}

   </>
  );
}
