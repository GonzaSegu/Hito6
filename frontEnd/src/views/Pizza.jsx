import '../assets/css/Pizza.css';
import {useState, useEffect} from "react";

const Pizza = () => {
    const [registro, setRegistro] = useState([]);
    
    useEffect(() => {
        consulta_registro();
    },[]);

    const consulta_registro = async () =>{
        const url = 'http://localhost:5000/api/pizzas/p001';
        const response = await fetch (url);
        const data = await response.json();
        setRegistro(data);
    }
   
    //  
    return (
        <div className="pizza-card">
            <div>
                <img src={registro.img} alt={registro.name} />
            </div>
            <div className="pizza-textos">
                {registro.name ? (
                    <>
                        <h2>{registro.name}</h2>
                        <p>{registro.desc}</p>
                        <ul>
                            {registro.ingredients.map((x, index) => (
                                <li key={index}>{x}</li>
                            ))}
                        </ul>
                        <div className='pizza-precio'>
                            <div className='pizza-precio'>
                                <h3><strong>Precio:</strong> ${registro.price.toLocaleString()}</h3>
                            </div>
                            <button className='btn_negro'>
                                <h4 >Añadir</h4>
                                <div>
                                    <img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '35px', marginLeft: '5px' }} />
                                </div>
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Cargando..</p> 
                )}
            </div>
        </div>
    );
};
export default Pizza