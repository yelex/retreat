import './Forest.css';
import React from 'react';

function Forest({isBottom, children}) {

    return (
      <section className={`forest${ isBottom ? ' forest_bottom' : ''}`}>
        { children }
      </section>
    );
  }
  
  export default Forest;