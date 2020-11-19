import "regenerator-runtime/runtime";
import React, { useState, useEffect, Component } from "react";
import AnimalsDisplay from './AnimalsDisplay.jsx';

const fetchUrl = "https://api.rescuegroups.org/v5/public/animals/";

// let result = [];
// if animalData.includes(req.params.name), result.
// let inputArr = [];
// let searchFields = document.getElementById('searchForm');


function App() {

   // let text = '';
    // for (let i = 0; i < searchFields.length; i++) {
    //     inputArr.push(text += searchFields[i].value);
    //     console.log(inputArr)
   // }   
  const [animalData, setAnimalData] = useState([]);
 
// inputArr.forEach(element => {
//  if (animalData.includes(element)) {

   useEffect(() => {
    fetch(fetchUrl, {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Authorization': 'ITkzZgnN'
        }
    })
    .then(res => res.json())
    .then(res => setAnimalData(res.data))
    .catch((err) => console.log(err))
}, []);
      
return (
    
        <AnimalsDisplay animalData={animalData}/>
      );
}
// });
// }

export default App;

