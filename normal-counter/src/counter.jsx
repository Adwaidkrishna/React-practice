import { useState } from "react"

function Counter (){

    const [count,setCount]=useState(0)//count current value //setcount update //use state 0 intial value

    return (
        <div>

            <h1>counter app</h1>
            
            <button onClick={()=>   {if (count<10)  setCount(count+1)}}>INC</button>
            <button onClick={()=>{setCount(count-1)}}>DEC</button>

            <h2>{count}</h2>

        </div>
    )
}

export default Counter