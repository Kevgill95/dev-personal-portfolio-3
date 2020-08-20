import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import '../css/index.css';
import '../css/app.css';

import react_logo from '../assets/images/logo512.png';
import JavaScript_logo from '../assets/images/JavaScript-logo.png';
import node_js_express_logo from '../assets/images/node-js-express.png';
import bootstrap_logo from '../assets/images/bootstrap-logo.png';

function HomePage(props) {

  return (
    <div>
      <Hero
      title={props.title} 
      subTitle={props.subTitle} 
      label={props.label} />
      <h4 className="textFadeInDown text-center">Technology used:</h4>
        <div className="container">
          <div className="row col-sm-12 text-center">

            <div className="col-md-4 col-lg-4 col-sm-4 textFadeInDown">
              <img className="App-logo" src={react_logo} />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-4  textFadeInDown">
              <img className="logo-tech" src={JavaScript_logo} />
            </div>

            <div className="col-md-4 col-lg-4 col-sm-4 textFadeInDown">
              <img className="logo-tech" src={bootstrap_logo} />
            </div>

          </div>
      </div>
      <Carousel className="imgFadeInDown d-flex" />
    </div>
  );
}



export default HomePage;