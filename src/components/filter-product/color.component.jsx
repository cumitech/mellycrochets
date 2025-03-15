import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "none",
    // border: "none",
    // boxShadow: "none",
  }),
  option: (styles, { isFocused, isSelected, isHovered }) => ({
    ...styles,
    backgroundColor: isSelected
      ? "#eb6753"
      : isHovered || isFocused
      ? "#eb675312"
      : undefined,
    // color: isSelected ? "white" : "black",
  }),
};

const ColorSelect = ({ color, setColor, loading, crochets, isLoading }) => {
  const options =
    crochets && crochets.length
      ? crochets.map((crochet) => {
          return {
            value: crochet.color,
            label: crochet.color,
          };
        })
      : [];

  const selectedModel =
    options.find((option) => option.value === color) || null;

  return (
    <Select
      defaultValue={options[0]}
      name="color"
      options={options}
      styles={customStyles}
      className="w-full text-start"
      classNamePrefix="select"
      value={selectedModel}
      onChange={(selected) => setColor(selected?.value || "")}
      isClearable={true}
      isLoading={isLoading}
      isDisabled={loading}
    />
  );
};

export default ColorSelect;
