import { useMany } from "@refinedev/core";

export const useCars = (tableProps) => {

  // use Many
  /**
   * car models
   */
  const carModelIds =
    tableProps?.dataSource?.map((item) => item.carModelId) || [];
  const { data: carModelsData, isLoading: isCarModelsLoading } = useMany({
    resource: "car_models",
    ids: carModelIds,
  });

  // Map car model IDs to names
  const carModelMap = carModelsData?.data?.reduce((acc, carModel) => {
    acc[carModel.id] = carModel.modelName;
    return acc;
  }, {});

  /**
   * transmission
   */
  const carTransmissionIds =
    tableProps?.dataSource?.map((item) => item.transmissionId) || [];
  const { data: carTransmissionsData, isLoading: isCarTransmissionsLoading } =
    useMany({
      resource: "car_transmissions",
      ids: carTransmissionIds,
    });

  // Map car transmission IDs to names
  const carTransmissionMap = carTransmissionsData?.data?.reduce(
    (acc, carTransmission) => {
      acc[carTransmission.id] = carTransmission.name;
      return acc;
    },
    {}
  );

  /**
   * engine
   */
  const carEngineIds =
    tableProps?.dataSource?.map((item) => item.engineId) || [];
  const { data: carEnginesData, isLoading: isCarEnginesLoading } = useMany({
    resource: "car_engines",
    ids: carEngineIds,
  });

  // Map car engine IDs to names
  const carEngineMap = carEnginesData?.data?.reduce((acc, carEngine) => {
    acc[carEngine.id] = carEngine.name;
    return acc;
  }, {});

  /**
location
   */
  const locationIds =
    tableProps?.dataSource?.map((item) => item.locationId) || [];
  const { data: locationsData, isLoading: islocationsLoading } = useMany({
    resource: "locations",
    ids: locationIds,
  });

  // Map clocation IDs to names
  const locationMap = locationsData?.data?.reduce((acc, location) => {
    acc[location.id] = location.name;
    return acc;
  }, {});
  // end useMany

  return {
    carModelMap,
    carTransmissionMap,
    carEngineMap,
    locationMap,
    isCarModelsLoading,
    isCarEnginesLoading,
    isCarTransmissionsLoading,
    islocationsLoading,
  };
};
