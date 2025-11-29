import {Hello, Msg} from "../components/Hello.tsx";
import {Counter} from "../components/Counter.tsx";
import {ToggleMsg} from "../components/ToggleMsg.tsx";
import {Timer} from "../components/Timer.tsx";

export default function Es1() {
    return (
        <div>
            <Msg/>
            <hr/>
            <Hello name={"WebProgramming Class"}/>
            <hr/>
            <Counter/>
            <hr/>
            <ToggleMsg>Test</ToggleMsg>
            <hr/>
            <ToggleMsg/>
            <hr/>
            <Timer/>
            <hr/>
        </div>
    )
}