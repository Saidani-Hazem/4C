import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const allget = async () => {
  try {
    const res = await api.get("/home");
    return res.data;
  } catch (error) {
    console.error("err:", error);
    throw error;
  }
};

export const addevent = async (event) => {
  try {
    const res = await api.post("/admin/event", event);
    return res.data;
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await api.delete(`/admin/event/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};

export const addclub = async (club) => {
  try {
    const res = await api.post("/admin/club", club);
    return res.data;
  } catch (error) {
    console.error("Error adding club:", error);
    throw error;
  }
};


export const deleteclub = async (id) => {
  try {
    const res = await api.delete(`/admin/club/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting club:", error);
    throw error;
  }
};

export const addpartner = async (club) => {
  try {
    const res = await api.post("/admin/partenaire", club);
    return res.data;
  } catch (error) {
    console.error("Error adding partenaire:", error);
    throw error;
  }
};

export const deletepartner = async (id) => {
  try {
    const res = await api.delete(`/admin/partenaire/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting partenaire:", error);
    throw error;
  }
};
