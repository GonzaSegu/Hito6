import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import Register from './views/Register';
import Login from './views/Login';
import Cart from './views/Cart';
import Pizza from './views/Pizza';
import Profile from './components/Profile';
import NotFound from './views/NotFound';
import PizzasProvider from './contexts/PizzasContext';


function App() {
  return (
    <>
    <PizzasProvider>
      <Navbar/>
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/pizza/p001' element={<Pizza/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>      
          {/*<Route path='/profile' element={Profile/>}/> */}
        </Routes>
      </div>
      <Footer/>
    </PizzasProvider>
    </>
  );
}

export default App;

