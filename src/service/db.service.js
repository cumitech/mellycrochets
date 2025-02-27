import { requestType } from ".";

export const dbService = {
  initialize: () => requestType.get("/api/db"),
};
