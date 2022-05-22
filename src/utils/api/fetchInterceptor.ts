import axios from "axios";
import api from './apis'
export const service = axios.create({
    baseURL: api.FETCH_NEWS,
    timeout: 60000,
  });