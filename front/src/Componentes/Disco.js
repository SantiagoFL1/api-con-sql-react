import { useParams  } from "react-router-dom";


export default function PaginaDisco ({Discos , DiscosCargados  , Comprados}) {

const {numero} = useParams()

const Comprar = (DiscoComprado) =>{
    if (Comprados.includes(DiscoComprado)) {
        alert('No se puede comprar dos veces el mismo disco'); 
        return
    }


    Comprados.push(DiscoComprado)
    return 
    
}

    return (
        <div> 
        {DiscosCargados && 
        
            <div className="DescripcionDisco">
                <p>Disco: {Discos[numero-1].titulo}</p>
                <p>Artista: {Discos[numero-1].artista} </p>
                <p>Año de lanzamiento: {Discos[numero-1].fecha}</p>
                <p>Precio: 100$</p>
                <button onClick={()=>Comprar(Discos[numero-1])}>Comprar</button>    
                
            </div>
        }
        </div>
     );
}
 
