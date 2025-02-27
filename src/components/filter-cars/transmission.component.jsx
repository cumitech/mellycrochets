import Select from "react-select";
import { carTransmissionAPI } from "../../store/api/car_trasmission_api";

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

const TransmissionSelect = ({ transmissionId, setTransmissionID }) => {
  const { data: carTransmissions, isLoading } =
    carTransmissionAPI.useFetchAllCarTransmissionsQuery(1);

  const options =
    carTransmissions && carTransmissions.length
      ? carTransmissions.map((carTransmission) => {
          return {
            value: carTransmission.id,
            label: carTransmission.name,
          };
        })
      : [];

  const selectedModel =
    options.find((option) => option.value === transmissionId) || null;

  return (
    <Select
      defaultValue={options[0]}
      name="transmissionId"
      options={options}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setTransmissionID(selected?.value || "")}
      isLoading={isLoading}
      // value={selectedModel}
      required
      isClearable={true}
    />
  );
};

export default TransmissionSelect;
