import React from 'react';
import 'boxicons/css/boxicons.min.css';

function Card({ card }) {
  const createList = (features) =>
    features.map((feature, i) => (
      <li key={i} className={feature.isIncluded ? '' : 'notIncluded'}>
        <span className="span">
          {feature.isIncluded ? (
            <i className="bx bx-check"></i>
          ) : (
            <i className="bx bx-x"></i>
          )}
        </span>
        {feature.text}
      </li>
    ));

  const btnClass = card.btn ? 'btn btnHighLight' : 'btn';

  return (
    <div className="card">
      <h3 className="tag">{card.tag}</h3>
      <h1 className="price">{card.price}</h1>
      <hr className="line" />
      <ul>{createList(card.features)}</ul>
      <button className={btnClass}>BUTTON</button>
    </div>
  );
}

export default Card;
