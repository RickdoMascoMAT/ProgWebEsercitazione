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
 * - `label`: string — the visible text shown inside the button.
 * - `onClick`: () => void — callback executed when the user clicks the button.
 *
 * @param {{label: string, onClick: () => void}} props
 * @returns {ReactElement} A native HTML button.
 */

export function Button({label, onClick}: Props): ReactElement{
    return <button onClick={onClick}>{label}</button>
}