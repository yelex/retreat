import './Runes.css';
import React from 'react';
import Rune from '../Rune/Rune';

function Runes() {
    return (
      <section className="runes">
          <div className="runes__container">
                <h2 className="runes__title">Путешествие для тебя, если:</h2>
                <div className="runes__grid">
                    <Rune number={1} text={'Чувствуешь  усталость, раздражение, постоянный недосып, апатию и не знаешь, что с этим делать'}/>
                    <Rune number={2} text={'Интересуешься духовным развитием и хочешь научиться глубже понимать себя'}/>
                    <Rune number={3} text={'Находишься в поиске наставника, который поможет раскрыть твой потенциал и увеличить мощность духа'}/>
                    <Rune number={4} text={'Ищешь способ поправить здоровье, улучшить отношения с близкими, стать успешнее в бизнесе'}/>
                    <Rune number={5} text={'Хочешь научиться слышать и общаться с пространством, в котором живешь'}/>
                    <Rune number={6} text={'Хочешь жить полной жизнью, каждый день испытывая счастье и поддержку мира'}/>
                </div>
          </div>
      </section>
    );
}
  
export default Runes;