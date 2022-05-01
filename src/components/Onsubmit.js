import React,{useState} from "react";

const Onsubmit=()=>{
    const [data, setData]= useState({
     username:'',
     password:'',
    })
    const {username,password}=data;
    const onChange=e=>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submithandler=e =>{
        e.preventDefault();
        console.log(data);
    }
    return(
    <div>
      <center>
        <form onSubmit={submithandler}>
            <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" /> <br></br>
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" /> <br></br>
            <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
    )
  }

export default Onsubmit