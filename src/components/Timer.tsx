import {useEffect, useState} from "react";

/**
 * Timer component that counts elapsed time since mount.
 *
 * Displays the time in the format: minutes : seconds : milliseconds.
 * The timer updates approximately every 10 milliseconds.
 * Note: The timer uses setInterval with 10ms delay, which may cause slight inaccuracies.
 *
 * No props are accepted.
 *
 * @returns {JSX.Element} Timer display showing elapsed time.
 */

export function Timer(){
    const [msec, setMSec] = useState(0);

    useEffect(()=>{
        const id = setInterval(()=> {
            setMSec((ms) => ms + 10)
        },10);
        return ()=> clearInterval(id);
    }, []);

    //Using Math.floor to calculate the sec and min by the msec amount.
    const hrs = Math.floor(msec / (36*Math.pow(10,5)));
    const min = Math.floor((msec % (36*Math.pow(10,5))) / (6*Math.pow(10,4)));
    const sec = Math.floor((msec % (6*Math.pow(10,4))) / Math.pow(10,3));
    const millSec = msec % (Math.pow(10,3));

    return <div>    Timer: {hrs.toString()}:{min.toString().padStart(2, "0")}:
    {sec.toString().padStart(2, "0")}:
    {millSec.toString().padStart(3, "0")}</div>
}