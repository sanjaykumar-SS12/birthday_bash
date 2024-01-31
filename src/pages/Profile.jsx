    import * as React from 'react';
    import { styled } from '@mui/material/styles';
    import Card from '@mui/material/Card';
    import CardHeader from '@mui/material/CardHeader';
    import CardMedia from '@mui/material/CardMedia';
    import CardContent from '@mui/material/CardContent';
    import CardActions from '@mui/material/CardActions';
    import Collapse from '@mui/material/Collapse';
    import Avatar from '@mui/material/Avatar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import { red } from '@mui/material/colors';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import ShareIcon from '@mui/icons-material/Share';
    import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
    import MoreVertIcon from '@mui/icons-material/MoreVert';
    import NavBar from '../components/NavBar';

    const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    }));
    

    export default function Profile() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <>
        
        <NavBar/>
        <Card sx={{ maxWidth: 1000 }}>
            
           
        <CardHeader
        
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Kids theme"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="500"
           
           
            image="https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Private B-party"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
           Booked for 2 hrs
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
               we prefer tamara as location
            </Typography>
            <Typography paragraph>
                
            </Typography>
            <Typography paragraph>
           
            </Typography>
            <Typography>total for 100 people kindly accomadate rooms and food in the same hotel--tamara
              
            </Typography>
            </CardContent>
        </Collapse>
        </Card>
        </>
       
    );
    }