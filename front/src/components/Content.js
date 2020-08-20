import React from 'react';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
            <div className="textFadeInDown">
              {props.children}
            </div>
    );
}

export default Content;