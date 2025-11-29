import type { ReactElement } from "react";
import { useState } from "react";
import { Hello } from "./Hello.tsx";
import { Counter } from "./Counter.tsx";

/**
 * StudentPanel
 *
 * Functional React component that renders a simple student panel UI.
 *
 * Behavior:
 * - Maintains internal `studentName` state (`string`) initialized to an empty string.
 * - Renders an input to update the student name, a `Hello` component with the current name,
 *   and a `Counter` component.
 *
 * Dependencies:
 * - `Hello` — displays the student name (prop `name: string`).
 * - `Counter` — simple incrementing counter.
 *
 * Props:
 * - None
 *
 * @returns {ReactElement} A container with heading, input, `Hello` and `Counter`.
 */

export function StudentPanel(): ReactElement {
    const [studentName, setStudentName] = useState<string>("");

    return (
        <div>
            <h1>Student Panel</h1>
            <input
                type="text"
                placeholder="Insert your name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />
            <Hello name={studentName} />
            <Counter />
        </div>
    );
}