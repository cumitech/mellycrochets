import Select from "react-select";

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

const YearSelect = ({ year, setYear }) => {
  const years = Array.from({ length: 30 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year, label: year };
  }).slice(5);

  const selectedModel = years.find((option) => option.value === year) || null;

  return (
    <Select
      defaultValue={years[5]}
      name="year"
      options={years}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setYear(selected.value || "")}
      required
      isClearable={true}
      // isLoading={isLoading}
    />
  );
};

export default YearSelect;
