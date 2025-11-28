import {useState} from "react";

/**
 * Counter
 *
 * Functional React component that displays a simple counter and a button to increment it.
 *
 * Usage:
 * ` <Counter /> `
 *
 * Behavior:
 * - Maintains internal `counter` state (number) initialized to 0.
 * - Renders the current value and an "Increase" button that increments the counter by 1.
 *
 * Returns:
 * - JSX.Element containing a paragraph with the current value and an increment button.
 */

export function Counter(){
    const[counter, setCounter] = useState(0);

    return(
        <div>
            <p>Value: {counter}</p>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
        </div>
    );
}