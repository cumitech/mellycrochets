import axios from "axios";

const dotenv = require("dotenv");

dotenv.config();

export async function gelocation() {
  const response = await axios.get(
    `https://geolocation-db.com/json/e2bfd850-e6d9-11ef-bc40-012fd2b64c41/`
  );

  return {
    response,
  };
}
