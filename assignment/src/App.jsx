
import './App.css'
import {Routes, Route } from "react-router-dom";
import LoginPage from './Layouts/LoginPage';
import SignupPage from './Layouts/SignupPage';
import Home from './Layouts/Home';
import CounterPage from './Layouts/CounterPage';
function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/SignUp" element={<SignupPage/>}/>
      <Route path='/Counter' element={<CounterPage/>}/>
     </Routes>
     <CounterPage/>
    </>
  )
}

export default App
