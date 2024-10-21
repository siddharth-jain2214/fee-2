import React from 'react'
import { useState } from 'react';

const State = () => {
    let incr=()=>{
        addcount(count+1);
        // let res=document.querySelector('h1');
        // res.innerText=`count is : ${count}`;
        
        
    }

    let [count,addcount]=useState(0);
  return (
    <div>
      {/* <h1>count is : {count}</h1>
      <button onClick={incr}>Increase count</button> */}


      <h1>count is : {count}</h1>
      <button onClick={()=>{addcount(count+1);}}>Increase count</button> 
    </div>
  )
}

export default State
