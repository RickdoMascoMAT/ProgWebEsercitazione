import type { ReactElement } from "react";
import {useState} from "react";
import {Button} from "./Button.tsx";

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
 * @return ReactElement containing a paragraph with the current value and an increment button.
 */

export function Counter(): ReactElement{
    const[counter, setCounter] = useState<number>(0);

    return(
        <div>
            <p>Value: {counter}</p>
            <Button onClick={()=>setCounter(c => c+1)} label={"Increase"}/>
        </div>
    );
}