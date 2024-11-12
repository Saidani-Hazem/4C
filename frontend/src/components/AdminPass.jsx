import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./admin.css";

const AdminPass = () => {
  return (
    <>
      <div>
        <div className="addevent">
          <h4>Changer Mot De Passe</h4>
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="actual pass"
            placeholder="Mot de passe Actuel"
            variant="standard"
            type="password"
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="new pass"
            placeholder="Nouveau Mot De Passe"
            variant="standard"
            type="password"
          />
          <br />

          <TextField
            sx={{ width: "100%", mb: 3.5 }}
            id="confirm pass"
            placeholder="Confirmer Nouveau Mot De Passe"
            variant="standard"
            type="password"
          />
          <br />
          <Button variant="contained" color="primary">
            Changer
          </Button>
        </div>
      </div>
    </>
  );
};

export default AdminPass;
