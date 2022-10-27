import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';


function App() {

  const [toggle, setToggle] = useState(false);
  function handler() {
    setToggle(!toggle)
  }

  const switcher = toggle ? <Link to={'sign_up'}>Sign Up</Link> : <Link to={'log_in'}>Log In</Link>;

  return (
    <>
    <header>
      <button onClick={handler}>{switcher}</button>
    </header>
    <main style={{display: 'flex', justifyContent: 'center'}}>
      <Outlet />
      </main>
    </>
  )
  
  
}

export default App;
