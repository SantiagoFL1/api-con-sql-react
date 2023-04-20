import { Outlet } from "react-router-dom";

const EncabezadoLista = () => {
    return ( 
        <div className="componente"> 
            <h1>Listado</h1>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default EncabezadoLista;