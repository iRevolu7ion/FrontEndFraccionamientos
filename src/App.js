import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import FraccionamientoPage from './pages/FraccionamientoPage';
/*
import Appbar from './components/AppBar';
import Sidebar from './components/SideBar';
*/


/*
function App() {
  return (
    <div className="App">
     <Appbar/>
     <Sidebar/> 
    </div>
  );
}
*/

const App = () =>{
  return(
  <Router>
    <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>} /> 
          <Route path='/register' element={<RegisterPage/>} />
         <Route path='/home' element={<HomePage/>} />
         <Route path='/fraccRegister' element={<FraccionamientoPage/>} />
         </Routes> 
  </Router>
    );
};
export default App;
