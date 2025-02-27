import { emptyUser } from "../../models/user";
import { nanoid } from "nanoid";

class UserRequestDto {
    constructor(data) {
      if (!data || typeof data !== "object") {
        throw new Error("Invalid user data");
      }
  
      if (!data.email || typeof data.email !== "string" || !data.email.includes("@")) {
        throw new Error("Valid email is required.");
      }
  
      if (!data.username || typeof data.username !== "string" || data.username.length > 50) {
        throw new Error("Username must not be more than 50 characters.");
      }
  
      if (!data.image || typeof data.image !== "string") {
        throw new Error("Image must be a string.");
      }
  
      // if (!data.password || typeof data.password !== "string" || data.password.length < 6) {
      //   throw new Error("Password must be at least 6 characters.");
      // }

      this.email = data.email;
      this.username = data.username;
      this.image = data.image;
      this.password = data.password;
      this.role = "user";
      this.provider = data.provider;
      this.phone = data.phone;
    }
  
    toData() {
      return {
        ...emptyUser,
        id: nanoid(10),
        email: this.email,
        username: this.username,
        image: this.image,
        password: this.password,
        role: this.role,
        provider: this.provider,
        phone: this.phone,
        verified: false,
      };
    }
  
    toUpdateData(data) {
      if (!data.id || typeof data.id !== "string") {
        throw new Error("Valid ID is required for update.");
      }
  
      return {
        id: data.id,
        email: data.email,
        username: data.username,
        image: data.image,
        role: data.role,
        provider: data.provider,
        phone: data.phone,
        verified: data.verified,
      };
    }
  }
  
  export default UserRequestDto;
  