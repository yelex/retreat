import './Rune.css';
import React from 'react';

function Rune({number, text}) {

  return (
    <div className="rune">
        <div className="rune__circle">
            <h3 className="rune__number">{ number }</h3>
        </div>
        <p className="rune__text">
            { text }
        </p>
    </div>


  );
}

export default Rune;