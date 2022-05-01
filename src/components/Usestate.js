import React, {useState} from 'react'

const Usestate=() =>{
    const [name, setName]= useState("Sathvika");
  return(
  <div>
    <center>
        <h2> {name}</h2>
      <button onClick={()=> setName(" Hii Talakanti")}>  CHANGE</button>
    </center>
  </div>
  )
}
export default Usestate;