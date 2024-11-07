import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./admin.css";
const AdminClub = () => {
  return (
    <>
      <div>
        <div>
          <div className="addevent">
            <h4>Clubs</h4>
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="titre"
              placeholder="Nom"
              variant="standard"
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="date"
              placeholder="image"
              variant="standard"
              type="file"
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

export default AdminClub;
