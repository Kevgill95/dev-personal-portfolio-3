import React from 'react';
import pdf from '../components/resume-copy.pdf';

function Resume(props) {
    return (
      <div>
        <a href={pdf} rel="noopener noreferrer" target="_blank"></a>
      </div>
    );
}

export default Resume;