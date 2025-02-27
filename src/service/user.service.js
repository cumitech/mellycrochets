import { requestType } from ".";

export const userService = {
  list: () => requestType.get("/api/users"),
  details: (code) => requestType.get(`/api/users/${code}`),
  getUserByEmail: (email) => requestType.get(`/api/users?email=${email}`),
  create: (user) => requestType.post(`/api/users`, user),
  update: (user) => requestType.put(`/api/users`, user),
  delete: (user) => requestType.del(`/api/users`, user),
};
