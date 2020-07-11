import React from 'react';

import CardInfo from '../components/CardInfo';
import '../css/app.css';

function Card(props) {

  return(
    <div className="d-inline-block kev-card" onClick={(e) => props.click(props.item)}>
      <img className="kev-card-image imgFadeInDown" src={props.item.imgSrc} alt={props.item.imgSrc} />
      <CardInfo 
        title={props.item.title} 
        subTitle={props.item.subTitle} 
        link={props.item.link} /> 
    </div>
  );

}

export default Card;