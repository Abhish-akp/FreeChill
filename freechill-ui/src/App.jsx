import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Freechill from './pages/Freechill';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="Login" element={<Login/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/"element={<Freechill/>}/>
    </Routes>
    </BrowserRouter>

  )
}
