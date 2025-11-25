import { apiService } from "./apiService";
import ApiEndPoint from "./apiEndpoint";

// const getToken = () => localStorage.getItem("token")?.replaceAll('"', '');
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const handleLoginUser = async (data) => {
  try {
    console.log("data2", data);
    return await apiService.post(ApiEndPoint.LOGIN_USER, data);
    
  } catch (err) {
    console.warn("Loign Error:", err);
    return err; // Re-throw error for better handling in calling functions
  }
};