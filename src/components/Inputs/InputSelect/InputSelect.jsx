
export const InputSelect = ({ label, options, selectOption, name, required, selected, ...props }) => {
 
 
 
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select {...props} name={name} style={{color: "white"}} required={required}>
        {
        selectOption && (
          <option value="" selected>
            {selectOption}
          </option>
        )}
        {
        options.map((option, index) => {
          return <option value={option.value} key={option.value + index} >{option.label}</option>;
        })}
      </select>
    </>
  );
};
