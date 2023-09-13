import { useState } from "react";
import "./App.css";
import Box from "./Box";
function Tictac() {
 
  const [state, setstate] = useState(Array(9).fill(null))   //state for value show
  
  const [turn, setturn] = useState("X") //state for turn player

 //  create Boxval function for onclick event
const handle = (i)=>{
  console.log('click',i);

 let copy = [...state]
    copy[i-1] = turn
    console.log(copy)
 setturn( turn === "X" ? "O" : "X")
  setstate(copy);

 const n = winnner();
if(n===true){
  alert(`${turn === "X" ? "O" :"X" } player won`)
}
}




//winner code

const winnner= ()=>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ( state[a]!==null &&  state[a] === state[b] && state[a] === state[c])  return true;
    
  }
  
}


  return (
    <div>
     
      <div className="con">
      <h2 style={{textAlign:"center"}}>Turn of Player: {turn}</h2>
        <div className="row">
          <Box pass={handle} num={1} value={state[0]}/>
          <Box pass={handle} num={2} value={state[1]}/>
          <Box pass={handle} num={3} value={state[2]}/>
        </div> 
        <div className="row">
          <Box pass={handle} num={4}  value={state[3]}/>
          <Box pass={handle} num={5} value={state[4]}/>
          <Box pass={handle} num={6} value={state[5]}/>
        </div>   
        <div className="row">
          <Box pass={handle} num={7} value={state[6]}/>
          <Box pass={handle} num={8} value={state[7]}/>
          <Box pass={handle} num={9} value={state[8]}/>
        </div> 
      </div>
    </div>
  );
}

export default Tictac;
