import { NavLink } from "react-router-dom";

const ErrorDiscos = () => {
    return ( 
        <div className="componente">
            <h1>No se pudo encontrar el disco</h1>
            <h3> <NavLink to="/listado" className='LinkP'> Volver al listado de discos </NavLink> </h3>
        </div>
     );
}
 
export default ErrorDiscos;