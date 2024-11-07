import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./admin.css";

const AdminEvent = () => {
  return (
    <>
      <div>
        <div>
          <div className="addevent">
            <h4>Événements</h4>
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="titre"
              placeholder="Titre de l'événement"
              variant="standard"
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="local"
              placeholder="Localisation"
              variant="standard"
              type="text"
            />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="date"
              placeholder="Date"
              variant="standard"
              type="text"
            />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="date"
              placeholder="image"
              variant="standard"
              type="file"
            />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="standard-multiline-static"
              multiline
              rows={4}
              placeholder="Description (optionelle)"
              variant="standard"
              type="text"
            />
            <br />
            <Button variant="contained" color="primary">
              Ajouter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEvent;
