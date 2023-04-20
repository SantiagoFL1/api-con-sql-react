
import { NavLink } from "react-router-dom";

const Listado = ({Discos}) => {



    return ( 

        <div>
                       
            <table >
                <thead >
                    <tr className="NombresColumnas">
                        <th>Disco</th>
                        <th>Artista</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody> 
                    { Discos.map(disco=>(
                        <tr key={disco.id} className="DatosDisco">
                            
                            <td> <NavLink to={disco.id.toString()} className="textoBlanco"> {disco.titulo}</NavLink></td>
                            <td>{disco.artista}</td>
                            <td>{disco.fecha}</td>
                            
                        </tr>
                
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default Listado;