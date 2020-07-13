import React from 'react';
import Pdf from '../../public/images/Resume.pdf';

function Resume(props) {
    return (
      <div>
        <a href={Pdf} rel="noopener noreferrer" target="_blank">{Pdf}</a>
      </div>
    );
}

export default Resume;