import React from 'react';
import AnimalDisplay from './AnimalDisplay.jsx';
//import App from './components/App.jsx';
             
 const AnimalsDisplay = (props) => {

 const arr = [];
   for (let i = 0; i < props.animalData.length; i++) {
    arr.push(<AnimalDisplay 
        name={props.animalData[i].attributes.name} 
        ageGroup={props.animalData[i].attributes.ageGroup} 
        sex={props.animalData[i].attributes.sex} 
        color={props.animalData[i].attributes.colorDetails} 
        desc={props.animalData[i].attributes.descriptionText} 
        pic={props.animalData[i].attributes.pictureThumbnailUrl} />)
   }
  return <div>
      <h3>Search Animals</h3>
      
         <form id="searchForm">
         <ul>
         <li>  <label>Name: 
           <input type = 'text' id = 'name-input'></input>
           </label></li>
       <li>    <label>Age: 
           <input type = 'text' id = 'age-input'></input>
           </label></li>
         <li>  <label>Sex: 
           <input type = 'text' id = 'sex-input'></input>
           </label></li>
        <li>   <label>Color: 
           <input type = 'text' id = 'color-input'></input>
           </label> </li><br /> <br /> 
           <button id="submitButton"
           //onClick = {() => App()}
            >Submit</button>
           </ul>
</form>

{arr} 
</div>;
 }
 




// const DisplayAnimals = props => (
//   <div className="displayBox">
//     <h4>Results</h4>
//     <div className="allAnimals">
//       {props.resultList.map((animal, idx) => displayResult(animal, idx, props))}
//     </div>
//   </div>
// );

 export default AnimalsDisplay;
