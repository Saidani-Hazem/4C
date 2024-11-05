import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});


export const allget = async () => {
  try {
    const res = await api.get('/home');
    return res.data;
  } catch (error) {
    console.error("err:", error);
    throw error;
  }
};
export default allget;