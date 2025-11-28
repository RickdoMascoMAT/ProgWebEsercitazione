interface Props {
    nome: string;
}

/**
 * Hello
 *
 * Functional React component that renders a simple greeting message.
 *
 * Props:
 * - nome: string — the name to display inside the greeting.
 *
 * Usage:
 * <Hello nome="WebProgramming Class" />
 *
 * Returns:
 * - JSX.Element containing a paragraph with the greeting "Hello, {nome}!".
 */

export function Hello({nome}: Props){
    return <p>Hello, {nome}!</p>
}