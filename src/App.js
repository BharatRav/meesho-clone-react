
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NoPage from './components/NoPage';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element ={<Home/>}/>
          <Route  path='/home' element ={<Home/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
          <Route path='*' element ={<NoPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App