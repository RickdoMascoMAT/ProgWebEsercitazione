import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Es1 from "./pages/Es1.tsx";
import Es1EsFinal from "./pages/Es1-EsFinal.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <nav>
              <Link to='/Home'>Home</Link> | <Link to='/Es1'>Es1</Link> | <Link to='/Es1EsFinal'>Es1EsFinal</Link>
          </nav>

          <Routes>
              <Route path='/*' element={<Home/>}></Route>
              <Route path='/Home' element={<Home/>}></Route>
              <Route path='/Es1' element={<Es1/>}></Route>
              <Route path='/Es1EsFinal' element={<Es1EsFinal/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
