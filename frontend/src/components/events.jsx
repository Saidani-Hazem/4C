import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import f from "../img/p.jpg"

import "./events.css"


const Events = ({events}) => {

    return (
        <div className="eventslist">
  {events.map((event) => (
    <Card sx={{ maxWidth: 280, mt: 1}} key={event.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={f}
          alt={event.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{fontSize: 13, fontWeight: "bold"}}>
            {event.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: "flex", alignItems: "center" }}>
            <DateRangeIcon/>{event.date}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display: "flex", alignItems: "center" }}>
            <PlaceIcon/>{event.localisation}
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
  ))}
</div>
    );
}

export default Events;
