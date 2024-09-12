import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { total } from '../utils/funciones'
import { PizzasContext } from "../contexts/PizzasContext";

const Navbar = () => {
    const {pizzas, setPizzas} = useContext(PizzasContext)
    const [price, quantity]   = [pizzas] 
    
  
    const token = false;
    const handletotal= total(pizzas)  
    
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Pizzería Mamma Mia!</h1>
          <Link to="/">
            <button className='btn_negro'><img src="../src/assets/img/pizzota.jfif" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Home</button>
          </Link>
          {token ? (
            <>
              <button>Profile</button>
              <button>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className='btn_negro'><img src="../src/assets/img/login.png" alt="Ver más" style={{ width: '25px', marginLeft: '5px' }} /> Login</button>
              </Link>
              <Link to="/register">
                <button className='btn_negro'><img src="../src/assets/img/registrarse.jfif" alt="Ver más" style={{ width: '26px', marginLeft: '5px' }} /> Register</button>
              </Link>
            </>
          )}
        </div>
        <div className="navbar-right">
          <Link to="/cart">
            <button className='btn_negro'><img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '25px', marginLeft: '5px' }} /> Total: ${handletotal.toLocaleString()}</button>
          </Link>
        </div>
      </nav>
    );
}
  
  export default Navbar;