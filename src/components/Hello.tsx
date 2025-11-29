import type { ReactElement } from "react";

interface Props {
    name: string;
}

/**
 * Hello
 *
 * Functional React component that renders a simple greeting message.
 *
 * Props:
 * - `name: string` — the name to display inside the greeting.
 *
 * Usage:
 * - `<Hello name="WebProgramming Class" />`
 *
 * @param {Props} props - Component props typed by TypeScript.
 * @returns {ReactElement} A paragraph element with the greeting message.
 */

export function Hello({name}: Props): ReactElement{
    return <p>Hello, {name}!</p>
}

/**
 * Msg
 *
 * Small presentational component that renders a welcome heading.
 *
 * @returns {ReactElement} An `h2` element with a welcome message.
 */

export function Msg(): ReactElement{
    return <h2>Welcome in React!</h2>
}