import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteEvent } from "../api.js";


import "./events.css";

const Events = ({ events, check }) => {
  return (
    <div className="eventslist">
      {events.map((event) => (
        <Card sx={{ maxWidth: 230, mt: 1 }} key={event._id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              image={event.image_url}
              alt={event._id}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                sx={{ fontSize: 13, fontWeight: "bold" }}
              >
                {event.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DateRangeIcon />
                {event.date}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PlaceIcon />
                {event.localisation}
              </Typography>
            </CardContent>
          </CardActionArea>
          {check === true ? (
            <IconButton
              onClick={() => {
                deleteEvent(event._id);
                window.location.reload();
              }}
              sx={{ float: "right" }}
              color="secondary"
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <></>
          )}
        </Card>
      ))}
    </div>
  );
};
export default Events;
