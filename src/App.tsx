import {Hello} from "./components/Hello.tsx";
import {Counter} from "./components/Contatore.tsx";
import {ToggleMsg} from "./components/ToggleMsg.tsx";
import {Timer} from "./components/Timer.tsx";


function Messaggio(){
    return <h2>Welcome in React!</h2>
}

function App() {

  return (
    <>
      <div>
          <Messaggio/>
          <hr/>
          <Hello nome={"WebProgramming Class"}/>
          <hr/>
          <Counter/>
          <hr/>
          <ToggleMsg>Test</ToggleMsg>
          <hr/>
          <ToggleMsg/>
          <hr/>
          <Timer/>
      </div>
    </>
  )
}

export default App
