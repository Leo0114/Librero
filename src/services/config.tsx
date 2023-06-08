import axios from "axios";
import { baseURL } from "../utils/constants";

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
  baseURL: baseURL,
});
