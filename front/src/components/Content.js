import React from 'react';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
              <Col className="text textFadeInDown">
                {props.children}
              </Col>
    );
}

export default Content;