import React from "react";
import "./partenaires.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteclub } from "../api";

const Clubs = ({ clubs, check }) => {

  return (
    <div className="parts">
      {clubs.map((club) => (
        <div key={club._id}>
          <img
            className="partimg"
            src={`http://localhost:5000/${club.image.replace(/\\/g, "/")}`}
            alt=""
          />
          <h4>{club.name}</h4>
          {check === true ? (
            <IconButton
              onClick={() => {
                deleteclub(club._id);
                window.location.reload();
              }}
              sx={{}}
              color="secondary"
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Clubs;
