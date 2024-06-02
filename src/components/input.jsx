import React from 'react';
import './Input.css'; // Import for custom styling (optional)

const Input = ({ label, type, value, onChange, ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
