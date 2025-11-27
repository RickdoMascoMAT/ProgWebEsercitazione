import {Hello} from "./components/Hello.tsx";
import {Counter} from "./components/Contatore.tsx";
import {ToggleMessaggio} from "./components/ToggleMessaggio.tsx";
import {Timer} from "./components/Timer.tsx";


function App() {

function Messaggio(){
    return <h2>Welcome in React!</h2>
}

  return (
    <>
      <div>
          <Messaggio/>
          <hr/>
          <Hello nome={"WebProgramming Class"}/>
          <hr/>
          <Counter/>
          <hr/>
          <ToggleMessaggio/>
          <hr/>
          <Timer/>
      </div>
    </>
  )
}

export default App
