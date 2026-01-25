import React from 'react';
import '../styles/Toast.css';

const Toast = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="toast show">
      <i className="fab fa-whatsapp"></i>
      <span>{message}</span>
    </div>
  );
};

export default Toast;

