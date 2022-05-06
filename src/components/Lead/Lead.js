import './Lead.css';
import React from 'react';
import circlesPath from '../../images/lead-circles.svg';
import Button from '../Button/Button';

function Lead() {

    return (
      <div className="lead">
        <div className="lead__container">
          <div className="lead__text-container">
            <div className="lead__title-container">
              <h1 className="lead__title">Дикий</h1>
              <h1 className="lead__title">ретрит</h1>
            </div>
            <h2 className="lead__subtitle">Путешествие в твое подсознание</h2>
            <p className="lead__text">27/05 - 29/05</p>
          </div>
          <img src={ circlesPath } alt="Логотип" className="lead__logo"/>
          {/* <h1 className="lead__title"></h1> */}
        </div>
        <div className="lead__btn-container">
          <Button type="dark-green" text="Оставить заявку"/>
          <Button type="transparent-yellow" text="Смотреть программу"/>
        </div>
      </div>
    );
  }
  
  export default Lead;