import React,{useState, useEffect} from "react";

const Counter =()=>{
    const [count, setCount]= useState(0);
    useEffect(()=> console.log("clicked"),[count]);
    /*useeffect will execute after return*/
    return(
    <div>
      <center>
          <p> you have clicked {count} times</p>
          <h2> {count}</h2>
        <button onClick={()=> setCount(count+1)}>  CHANGE</button>
      </center>
    </div>
    );
}
export default Counter;