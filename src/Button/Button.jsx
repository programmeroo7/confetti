import React from 'react';
import './Button.css'; // Import the CSS file for styling

const Button = ({ className, onClick, text }) => {
  return (
    <button className={`${className} animated-button`}onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
