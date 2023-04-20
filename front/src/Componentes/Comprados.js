import { NavLink } from "react-router-dom";

const DiscosComprados = ({Comprados , DiscosCargados}) => {
    let SinComprados = true
        if (Comprados.length>0) {
            SinComprados=false
        }
         
    
        return ( 
        <div className="componente">
           {!SinComprados && <h2>Discos comprados:</h2>}
            {SinComprados && 
                <div className="sinComprados"> 
                    <h3>Todavía no compró ningún disco.</h3>
                    <p>Para comprar un disco, visite nuestro listado <NavLink className="LinkP" to='/listado'>aquí</NavLink>. </p>
                </div>}
           <div className="ContenedorFichas">
                
                {Comprados.map(Comprado => (
                    <div key={Comprado.id} className="FichaDiscoComprado">
                        <h3>{Comprado.titulo}</h3>
                        <p>{Comprado.artista}</p>



                    </div>
                ))}
            </div>
            {!SinComprados &&
                <h2>Dinero gastado: {Comprados.length*100}$</h2>
            }
        </div>
     );
}
 
export default DiscosComprados;