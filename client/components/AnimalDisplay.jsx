
import React from 'react';
import LabeledText from './LabeledText.jsx';



const AnimalDisplay = (props) => 
<div>
<h2><a href={props.pic}>{props.name}</a></h2>
<div className="animalDetails">
    <LabeledText label="Name" text={props.name} />
    <LabeledText label="Age" text={props.ageGroup} />
    <LabeledText label="M/F" text={props.sex} />
    <LabeledText label="Color" text={props.color} />
    <LabeledText label="Description" text={props.desc} />
    <hr />
    </div>
    </div>




//     <div className="flex">
//       <button onClick={addCard}>+</button>
//       <button onClick={deleteCard}>-</button>
//     </div>
//   </div>
// );
 export default AnimalDisplay;
