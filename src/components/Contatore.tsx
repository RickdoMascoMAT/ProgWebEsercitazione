import {useState} from "react";

export function Counter(){
    const[counter, setCounter] = useState(0);

    return(
        <div>
            <p>Value: {counter}</p>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
        </div>
    );
}