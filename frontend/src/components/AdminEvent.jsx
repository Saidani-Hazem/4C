import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./admin.css";

import { addevent } from "../api.js";

const AdminEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    localisation: "",
    date: "",
    description: "",
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
      await addevent(formData);
      setFormData({ name: "", image: "" });
      window.location.reload();
    } catch (error) {
      console.error("Failed to add club:", error);
    }
  };

  return (
    <div className="addevent">
      <h4>Événements</h4>
      <form onSubmit={add}>
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="name"
          placeholder="Titre de l'événement"
          variant="standard"
          type="text"
          value={formData.name}
          onChange={change}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="localisation"
          placeholder="Localisation"
          variant="standard"
          type="text"
          value={formData.localisation}
          onChange={change}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="date"
          placeholder="Date"
          variant="standard"
          type="text"
          value={formData.date}
          onChange={change}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="image"
          variant="standard"
          type="file"
          onChange={transform}
        />
        <TextField
          sx={{ width: "100%", mb: 3.5 }}
          id="description"
          multiline
          rows={4}
          placeholder="Description (optionelle)"
          variant="standard"
          value={formData.description}
          onChange={change}
        />
        <Button type="submit" variant="contained" color="primary">
          Ajouter
        </Button>
      </form>
    </div>
  );
};

export default AdminEvent;