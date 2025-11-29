import {Button} from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Esercitazioni</h1>
            <Button label={"LOGIN"} onClick={()=> navigate("/Login")}/>
        </div>
    )
}