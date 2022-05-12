import './Button.css';
import React from 'react';

function Button({type, text}) {

  return (
    <button className={`button button_type_${type}`}>
      { text }
    </button>
  );
}

export default Button;