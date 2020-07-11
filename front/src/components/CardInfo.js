import React from 'react';
import { useSpring, animated } from 'react-spring';

import "../css/index.css";
import "../css/app.css";

function CardInfo(props) {

  const style = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div className="kev-card-info" style={style}>
      <p className="kev-card-title textFadeInDown2">{props.title}</p>
      <p className="kev-card-subtitle textFadeInDown2">{props.subTitle}</p>
      <a className="textFadeInDown2" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
    </animated.div>
  );
}


export default CardInfo;