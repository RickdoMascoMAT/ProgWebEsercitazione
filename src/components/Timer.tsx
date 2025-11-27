import {useEffect, useState} from "react";

export function Timer(){
    const [msec, setMSec] = useState(0);

    //Using 10ms timeout since 1ms it's too little to make the time reliable. it's still not reliable
    useEffect(()=>{
        const id = setInterval(()=> {
            setMSec((ms) => ms + 10)
        },10);
        return ()=> clearInterval(id);
    }, []);

    //Using Math.floor to calculate
    const min = Math.floor(msec / 60000);
    const sec = Math.floor((msec % 60000) / 1000);
    const millSec = msec % 1000;

    return <div>    Timer: {min.toString().padStart(2, "0")}:
    {sec.toString().padStart(2, "0")}:
    {millSec.toString().padStart(3, "0")}</div>
}