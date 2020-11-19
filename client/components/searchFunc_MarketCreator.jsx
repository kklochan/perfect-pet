/**
//  * ************************************
//  * search func?
//  * @module  MarketCreator
//  * @author
//  * @date
//  * @description presentation component that takes user input for new market creation
//  *
//  * ************************************
//  */

//  import React from 'react';
//  import App from './components/App.jsx';


// const searchParams = props => (

//     // how do we create the circuit between the store and an input field?
//     // how do we update the store from a presentation component?
//     <div>
//      <h3>Search Animals</h3>
//      <form>
//        <label>Name: 
//        <input type = 'text' id = 'name-input' onChange = {(e)=> {
//        props.setNewLocation(e.target.value)
//        }
//        }></input>
//        </label>
//        <button onClick = {(e)=>{
//         //  if (e.target.value === '') alert('Enter Location')
//            props.addMarket()
//          e.preventDefault()
//          }} >Add Market</button>
         
       
//      </form>
//      <hr/>
//     </div>
    
//   );
 import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
      ],
      currentUser: 'X'
    };
    this.alternate = this.alternate.bind(this);
  }

  // declare a function alternate
  alternate(row, col) {
    const newState = Object.assign({}, this.state);
    newState.text[row][col] = newState.text[row][col] === 'X' ? 'O' : 'X';
    this.setState(newState);
    // if (this.state.text === 'X') {
    //   this.setState({text: 'O'})
    // } else {
    //   this.setState({text: 'X'})
    // }
  }

  //instatiate the box properties so that we can pass them down and
  //use them in the box func (putting them in real html attributes)
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board
          key={'Game-board'}
          text={this.state.text}
          switchXO={this.alternate}
        />
      </div>
    );
  }
}
// function checkScore(props) {
// let winners = [
//   ['Box0', 'Box1', 'Box2'],
//   ['Box3', 'Box4', 'Box5'],
//   ['Box6', 'Box7', 'Box8'],
//   ['Box0', 'Box3', 'Box6'],
//   ['Box1', 'Box4', 'Box7'],
//   ['Box2', 'Box5', 'Box8'],
//   ['Box0', 'Box4', 'Box8'],
//   ['Box2', 'Box4', 'Box6']
// ]
//
// }

function Board(props) {
  const rows = [];
  for (let i = 0; i < props.text.length; i++) {
    rows.push(
      <div>
        <Row
          key={'Row' + i}
          rowNum={i}
          text={props.text[i]}
          switchXO={props.switchXO}
        />
      </div>
    );
  }
  return rows;
}

//think of how in simon you used an array to create a row of boxes
function Row(props) {
  const boxes = [];
  for (let i = 0; i < 3; i++) {
    boxes.push(
      <Box
        key={'Box' + (props.rowNum * 3 + i)}
        boxNum={props.rowNum * 3 + i}
        rowNum={props.rowNum}
        colNum={i}
        text={props.text[i]}
        style={{ height: '100px', width: '100px' }}
        switchXO={props.switchXO}
      />
    );
  }
  return boxes;
}

//pass the box props down into box using (props), then reference them
//on line 41
function Box(props) {
  return (
    <button
      onClick={() => props.switchXO(props.rowNum, props.colNum)}
      style={props.style}
    >
      {props.text}
    </button>
  );
}

render(<App />, document.querySelector('#root'));


//    const searchParams = () => {
//     const [params, setParams] = useState({});
//         // how do we create the circuit between the store and an input field?
//         // how do we update the store from a presentation component?
        // <div>
        //  <h3>Search Animals</h3>
        //  <form>
        //    <label>Name: 
        //    <input type = 'text' id = 'name-input'></input>
        //    </label>
        //    <label>Age: 
        //    <input type = 'text' id = 'age-input'></input>
        //    </label>
        //    <label>Sex: 
        //    <input type = 'text' id = 'sex-input'></input>
        //    </label>
        //    <label>Color: 
        //    <input type = 'text' id = 'color-input'></input>
        //    </label>
         
//         //     <button onClick = {() => setParams(params)} >Submit</button>
             
//         {/* onChange = {(e)=> {
//            props.setNewLocation(e.target.value)
//            }
//            } */}
//          </form>
//          <hr/>
//         </div>
        
//         };

// export default MarketCreator;
