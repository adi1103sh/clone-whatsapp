import axios from "axios";

const obj = axios.create({
  baseURL: "https://server-whatsapp-backend.herokuapp.com",
});

export default obj;