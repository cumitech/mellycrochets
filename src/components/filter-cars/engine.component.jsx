import Select from "react-select";
import { carEngineAPI } from "../../store/api/car_engine_api";

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

const EngineSelect = ({ engineId, setEngineId }) => {
  const { data: carEngines, isLoading } =
    carEngineAPI.useFetchAllCarEnginesQuery(1);

  const options =
    carEngines && carEngines.length
      ? carEngines.map((carEngine) => {
          return {
            value: carEngine.id,
            label: carEngine.name + " (" + carEngine.horsepower + ")",
          };
        })
      : [];

  const selectedModel =
    options.find((option) => option.value === engineId) || null;

  return (
    <Select
      defaultValue={options[0]}
      name="carEngine"
      options={options}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setEngineId(selected?.value || "")}
      // value={selectedModel}
      required
      isClearable={true}
      isLoading={isLoading}
    />
  );
};

export default EngineSelect;
