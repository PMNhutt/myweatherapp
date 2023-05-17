import axios from "axios";

//base url to make requests to the database
const instances = axios.create({
  baseURL: process.env.BASE_API_URL,
});

export default instances;
