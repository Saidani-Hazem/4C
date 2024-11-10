import React from "react";
import "./partenaires.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletepartner } from "../api";
const Partenaires = ({ parts, check }) => {
  return (
    <div className="parts">
      {parts.map((part) => (
        <div key={part.id}>
          <img
            className="partimg"
            src={part.image_url}
            alt=""
          />
          <h4>{part.name}</h4>
          {check === true ? (
            <IconButton
              onClick={() => {
                deletepartner(part._id);
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

export default Partenaires;
