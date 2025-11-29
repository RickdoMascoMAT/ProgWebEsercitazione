import { useEffect, useState} from "react";

/**
 * Timer
 *
 * Functional React component that displays elapsed time since mount in the format:
 * `hours:minutes:seconds:milliseconds`.
 *
 * Implementation notes:
 * - Uses a `setInterval` tick of `23ms` to update an internal millisecond counter for an aesthetic millisecond display.
 * - Numeric literals are replaced by named constants in the implementation (e.g. `MS_PER_HOUR`, `MS_PER_MIN`, `MS_PER_SEC`).
 * - No props are accepted.
 *
 * @returns {JSX.Element} Timer display showing elapsed time.
 */


export function Timer() {
    const [msec, setMSec] = useState(0);
    const MS_PER_HOUR = 3600000;
    const MS_PER_MIN = 60000;
    const MS_PER_SEC = 1000;

    //I decided to put a 23ms delay to reduce the amount operations in a second and to improve aesthetics by adding also the last digit of the milliseconds
    useEffect(()=>{
        const id = setInterval(()=> {
            setMSec((ms) => ms + 23)
        },23);
        return ()=> clearInterval(id);
    }, []);

    //Using Math.floor to calculate the sec and min by the msec amount.
    const hrs = Math.floor(msec / MS_PER_HOUR);
    const min = Math.floor((msec % (MS_PER_HOUR)) / MS_PER_MIN);
    const sec = Math.floor((msec % (MS_PER_MIN)) / MS_PER_SEC);
    const millSec = msec % MS_PER_SEC;

    return <div>    Timer: {hrs.toString()}:{min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}:
        {millSec.toString().padStart(3, "0")}</div>
}
