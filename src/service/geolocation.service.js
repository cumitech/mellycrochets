import axios from "axios";

// utils/getGeolocation.ts
export const getGeolocation = async () => {
  try {
    const response = await axios.get(
      `https://geolocation-db.com/json/f2431d4f714497`
    );
    const data = await response.data;
    return data.country_code; // Return country code
  } catch (error) {
    console.error("Geolocation fetch error:", error);
    return null;
  }
};
