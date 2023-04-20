import { Outlet , NavLink } from "react-router-dom";

const Encabezado = () => {
    return ( 
        <div>
            <nav className="navbar">
            <header className="header">
                <h1 className="modal-title"> <NavLink to='/' className='textoBlanco'> Tienda de discos </NavLink></h1>
                <div>
                    
                    <NavLink className="links" to="informacion"> Acerca del sitio</NavLink>
                    <NavLink className="links" to="comprados"> Discos comprados</NavLink>
                    <NavLink className="links" to="agregar">Agregar un disco</NavLink>
                    <NavLink className="links" to="listado">Lista de discos</NavLink>
                    </div>   
            </header>
            
        </nav>
            
            <main>
                
                <Outlet/>
            </main>
        </div>
     );
}
 
export default Encabezado;