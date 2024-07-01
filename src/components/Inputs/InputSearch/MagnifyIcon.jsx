import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MagnifyIcon = ({className, type, onClick}) => {
  return <button className={className} type={type} onClick={onClick}><FaMagnifyingGlass /></button>;
};

export default MagnifyIcon;
