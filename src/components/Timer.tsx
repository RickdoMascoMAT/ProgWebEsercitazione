import {type JSX, useEffect, useRef, useState} from "react";

/**
 * Timer
 *
 * Functional React component that displays the time since mount in the format: hours:minutes:seconds:milliseconds.
 * It uses performance.now() and requestAnimationFrame for improved millisecond resolution.
 *
 * No props are accepted.
 *
 * @returns {JSX.Element} Timer display showing elapsed time.
 */

export function Timer(): JSX.Element{
    const [msec, setMSec] = useState<number>(0);
    const startRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(()=>{
        startRef.current = performance.now();

        const loop = () => {
            const start = startRef.current ?? performance.now();
            const elapsed = performance.now() - start;
            setMSec(Math.floor(elapsed));
            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return ()=> {
            if(rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const hrs = Math.floor(msec / 3_600_000);
    const min = Math.floor((msec % 3_600_000) / 60_000);
    const sec = Math.floor((msec % 60_000) / 1_000);
    const millSec = msec % 1_000;

    return <div>Timer: {hrs.toString().padStart(2, "0")}:{min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}:{millSec.toString().padStart(3, "0")}</div>
}