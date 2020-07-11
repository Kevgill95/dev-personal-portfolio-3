import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import '../css/index.css';

function HomePage(props) {

  return (
    <div className="col-md-12 col-sm-12">
      <Hero
      title={props.title} 
      subTitle={props.subTitle} 
      label={props.label} />
      <Carousel className="imgFadeInDown" />
    </div>
  );

}



export default HomePage;