import type { ReactElement } from "react";

interface Props {
    label: string;
    onClick: () => void;
}

/**
 * Button
 *
 * Functional React component that renders a native HTML button.
 *
 * Props:
 * - `label: string` — visible text shown inside the button.
 * - `onClick: () => void` — callback executed when the user clicks the button.
 *
 * @param {Props} props - Component props typed by TypeScript.
 * @returns {ReactElement} A native HTML button element.
 */

export function Button({label, onClick}: Props): ReactElement{
    return <button onClick={onClick}>{label}</button>
}