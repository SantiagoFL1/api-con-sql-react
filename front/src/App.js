

import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import { useState , useEffect } from "react"
//Hola
//Componentes
import Informacion from './Componentes/Informacion';
import Listado from './Componentes/Listado';
import Encabezado from './Componentes/Encabezado';
import Agregar from './Componentes/Agregar';
import PaginaDisco from './Componentes/Disco';
import EncabezadoLista from './Componentes/EncabezadoLista';
import DiscosComprados from './Componentes/Comprados';
import Error from './Componentes/Errores/Error';
import Principal from './Componentes/Principal';
import ErrorDiscos from './Componentes/Errores/ErrorDiscos';



function App() {


  const [Disco,setDisco] = useState({
    titulo:'',
    artista:'',
    fecha:0
  })


  const [Discos,setDiscos] = useState([])

  const [DiscosCargados,setDiscoscargados] = useState(false)

  let [Comprados] = useState([])

  useEffect(()=>{
    const ObtenerDisco = () =>{
        fetch('http://localhost:5000/api')
        .then(res => res.json())
        .then(res=>{
          setDiscos(res)
          setDiscoscargados(true)  
        })
    }
    ObtenerDisco()
    
  },[])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Encabezado/>}>
      <Route index element={<Principal/>} />
      <Route path='listado' element={<EncabezadoLista/>} errorElement={<ErrorDiscos/>}>
        <Route index element={<Listado setDiscos={setDiscos} Discos={Discos} setDisco={setDisco} Disco={Disco} DiscosCargados={DiscosCargados}/>}  />
        <Route path=":numero" element={<PaginaDisco Discos={Discos} DiscosCargados={DiscosCargados} Comprados = {Comprados}  />}/>
      </Route>
      <Route path="informacion" element={<Informacion />} />
      <Route path="agregar" element={<Agregar Disco={Disco} setDisco={setDisco} DiscosCargados={DiscosCargados} />} />
      <Route path="comprados" element={<DiscosComprados Comprados = {Comprados} DiscosCargados={DiscosCargados}  />} />
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)



  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
