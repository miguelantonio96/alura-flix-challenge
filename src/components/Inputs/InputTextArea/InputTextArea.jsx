export const InputTextArea = ({ label, name, required, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea {...props} name={name} required={required}></textarea>
    </>
  );
};
