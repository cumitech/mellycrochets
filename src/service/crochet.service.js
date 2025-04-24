import { requestType } from ".";

export const CrochetsService = {
  filterByIds: (ids) => requestType.get(`/crochets/filter-by-ids?ids=${ids.join(",")}`),
};