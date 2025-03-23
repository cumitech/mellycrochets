import { requestType } from ".";

export const userService = {
  list: () => requestType.get("/users"),
  details: (code) => requestType.get(`/users/${code}`),
  getUserByEmail: (email) => requestType.get(`/users?email=${email}`),
  create: (user) => requestType.post(`/users`, user),
  update: (user) => requestType.put(`/users`, user),
  delete: (user) => requestType.del(`/users`, user),
};
