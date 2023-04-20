import { NavLink } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="componente">
            <h1>La página no fue encontrada</h1>
            <h3>Volver a la <NavLink className='LinkP' to=''> página principal </NavLink></h3>
        </div>
     );
}
 
export default Error;