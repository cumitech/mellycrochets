"use client";
import Select from "react-select";
import { carModelAPI } from "../../store/api/car_model_api";

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "none",
    border: "none",
    boxShadow: "none",
  }),
  option: (styles, { isFocused, isSelected, isHovered }) => ({
    ...styles,
    backgroundColor: isSelected
      ? "#eb6753"
      : isHovered || isFocused
      ? "#eb675312"
      : undefined,
    color: isSelected ? "white" : "black",
  }),
};

const CarModelSelect = ({ carModelId, setCarModelId }) => {
  const { data: carModels, isLoading } =
    carModelAPI.useFetchAllCarModelsQuery(1);

  const modelOptions =
    carModels && carModels.length
      ? carModels.map((carModel) => {
          return {
            value: carModel.id,
            label: carModel.modelName,
          };
        })
      : [];

  // Find the selected model from options
  const selectedModel =
    modelOptions.find((option) => option.value === carModelId) || null;

  return (
    <Select
      defaultValue={modelOptions[0]}
      name="carModelId"
      options={modelOptions}
      styles={customStyles}
      className="w-full text-start border-0 bg-none"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setCarModelId(selected?.value || "")}
      isLoading={isLoading}
      required
      isClearable={true}
    />
  );
};

export default CarModelSelect;
