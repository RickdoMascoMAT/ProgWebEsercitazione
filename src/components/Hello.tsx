interface Props {
    nome: String;
}

export function Hello({nome}: Props){
    return <p>Hello, {nome}!</p>
}