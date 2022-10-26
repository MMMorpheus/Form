import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
    <div>Hello Router</div>
    <ol>
      <li>
          <Link to={'sign_up'}>Sign Up</Link>
      </li>
      <li>
          <Link to={'log_in'}>Log In</Link>
      </li>
    </ol>
    </>
  )
  
  
}

export default App;
