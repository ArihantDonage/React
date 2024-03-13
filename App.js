import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Academic from './pages/Academic';
import Myproject from './pages/Myproject';
import Navbar from './component/Navbar';
import './App.css';

export default function App() 
{

  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/aboutme' element={<Aboutme/>}></Route>
    <Route path='/academic' element={<Academic/>}></Route>
    <Route path='/myproject' element={<Myproject/>}></Route>
    </Routes>
    </div>
  );
}







