import Select from "react-select";
import { countryAPI } from "../../store/api/country_api";

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

const CountrySelect = ({ locationId, setLocationId }) => {
  const { data: countries, isLoading } =
    countryAPI.useFetchAllCountriesQuery(1);

  const options =
    countries && countries.length
      ? countries.map((country) => {
          return {
            value: country.id,
            label: country.name,
          };
        })
      : [];

  const selectedModel =
    options.find((option) => option.value === locationId) || null;

  return (
    <Select
      defaultValue={options[0]}
      name="country"
      options={options}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setLocationId(selected?.value || "")}
      required
      isClearable={true}
      isLoading={isLoading}
    />
  );
};

export default CountrySelect;
