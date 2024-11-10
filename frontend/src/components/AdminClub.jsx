import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addclub } from "../api.js";
import "./admin.css";

const AdminClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const transform = (e) => {
    const { id, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        setFormData({
          ...formData,
          [id]: reader.result,
        });
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
    }
  };

  const change = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const add = async (e) => {
    e.preventDefault();
    try {
      await addclub(formData);
      setFormData({ name: "", image: "" });
      window.location.reload();
    } catch (error) {
      console.error("Failed to add club:", error);
    }
  };

  return (
    <>
      <div>
        <div className="addevent">
          <h4>Clubs</h4>
          <form onSubmit={add}>
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="name"
              placeholder="Nom"
              variant="standard"
              type="text"
              value={formData.name}
              onChange={change}
            />
            <br />
            <TextField
              sx={{ width: "100%", mb: 3.5 }}
              id="image"
              placeholder="image"
              variant="standard"
              type="file"
              onChange={transform}
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              Ajouter
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminClub;
