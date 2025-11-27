import {useState} from "react";

export function ToggleMessaggio(){
    const[visibility,setVisibility] = useState(true);

    return (
        <div>
            {visibility && <p>This Message can be hidden.</p>}
            <button onClick={()=>setVisibility(!visibility)}>
                {visibility ? "Hide" : "Show"}
            </button>
        </div>
    );
}