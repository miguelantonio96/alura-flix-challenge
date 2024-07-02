import React from "react";
import MagnifyIcon from "./MagnifyIcon";

export const InputSearch = ({
  placeholder,
  name,
  id,
  type,
  handleSearch,
  onChange,
  onKeyPress,
  value,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        
        onKeyDown={onKeyPress}
      />

      <MagnifyIcon
        className="btn-magnify"
        type="button"
        onClick={handleSearch}
      />
    </>
  );
};
