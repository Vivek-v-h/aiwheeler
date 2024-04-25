import {BrowserRouter,Routes,Route  } from 'react-router-dom'
import {React} from "react";
import About from "./pages/About.jsx"
import Home from './pages/Home.jsx';
import Signin from "./pages/Signin.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from './pages/Signup.jsx';
import {useSelector } from 'react-redux';


import './App.css'
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  const {currentUser}=useSelector((state)=>state.user);

  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={currentUser?<Home />:<Signin/>}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Signin/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
