import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import Kevin_Lily from '../assets/images/Kevin_Lily.jpg';

import '../css/index.css';

function About(props) {

    return (
        <Container md={8} sm={12} className="justify-content-center">
          <Hero title={props.title} className="kev-card-image-about" />

          <img className="kev-card-image-about imgFadeIn2" alt="src" src={Kevin_Lily} />

          <Content className="d-flex justify-content-center">
            <p className="textFadeInDown2">Hello, my name is Kevin Gillooly, and I am a software developer with experience in JavaScript, React, Ruby on Rails, React Typescript, PostgreSQL, C#, HTML, and CSS.</p>
          
            <p className="textFadeInDown2">I am currently learning more tech each and every day, with gaining more experience in SQL, Material UI, Node JS, and backend development.</p>
          
            <p className="textFadeInDown2">When I'm not developing, I like hanging out with friends, meeting new people, playing basketball and golf, and traveling. I also like taking pictures of my travels too!</p>
          </Content>
        </Container>
    );

}



export default About;