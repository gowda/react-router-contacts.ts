import axios from 'axios';

export const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL?.replace(
  /\/+$/,
  ''
);

const client = axios.create({ baseURL: SERVER_BASE_URL });

export default client;
