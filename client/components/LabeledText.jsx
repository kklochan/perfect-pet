import React from 'react';


const LabeledText = ({ label, text }) => (
  <p className="animalDetails">
    <strong>{`${label}: `}</strong>
    {text}
  </p>
);

export default LabeledText;
