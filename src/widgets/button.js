import React from 'react';
import './button.css';

const Btn = ({ children }) => {
  return (
    <button className="custom-button">
      {children}
    </button>
  );
};

export default Btn;
