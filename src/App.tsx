import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Es1 from "./pages/Es1.tsx";
import Es1EsFinal from "./pages/Es1-EsFinal.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";

function App() {

  return (
    <>
      <BrowserRouter basename="/ProgWebEsercitazione">
          <nav>
              <Link to='/Es1'>Es1</Link> | <Link to='/Es1EsFinal'>Es1EsFinal</Link>
              <hr/>
              <Link to='/Home'>Home</Link> | <Link to='/About'>About us</Link> | <Link to='/Profile'>Profile</Link>
          </nav>

          <Routes>
              <Route path="*" element={<NotFound/>} />
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Home' element={<Home/>}></Route>
              <Route path='/Es1' element={<Es1/>}></Route>
              <Route path='/Es1EsFinal' element={<Es1EsFinal/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Profile/:name" element={<Profile/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
