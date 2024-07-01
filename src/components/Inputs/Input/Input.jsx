
export const Input = ({ label, name, required, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...props} required={required}/>
    </>
  );
};
