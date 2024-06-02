import React from 'react';
import './Button.css';

const Button = ({ label, onClick, ...props }) => {
  return (
    <button className="button" onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
