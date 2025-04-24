import { useOne } from "@refinedev/core";

export const useOrder = () => {
  const getCrochet = async (id) => {
    const { data, isLoading, isFetching } = useOne({
      resource: "crochets",
      id: id,
      queryOptions: {
        enabled: !!id,
      },
    });

    if (isLoading || isFetching) return;

    return data;
  };
  return { getCrochet };
};
