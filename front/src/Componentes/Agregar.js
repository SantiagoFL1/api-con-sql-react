const Agregar = ({Disco , setDisco , DiscosCargados}) => {
    
    
    const Cambio = e => {
        setDisco({
            ...Disco,
            [e.target.name]: e.target.value
            
        })
    }

    let {titulo , artista , fecha} = Disco


    const Submit = s =>{
        
        fecha = parseInt(fecha,10)

        if (titulo === '' || artista === '' || fecha<=0) {
            alert('Por favor, complete todos los campos')
        
            return
        }
        

        const Peticion = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(Disco)
        }

        fetch('http://localhost:5000/api' , Peticion)
        .then(res=>res.text())
        .then(res => console.log(res))

        setDisco({
            titulo:'',
            artista:'',
            fecha:0
        })
    }


    return ( 
        <div className="componente">
            <h1>Agregar un disco</h1>
        
            <form onSubmit={Submit}>

                <div className="Label-Input">
                    <label>Título del disco: </label>
                    <input value={titulo} name="titulo" onChange={Cambio} type="text"></input>
                </div>
                <div className="Label-Input">
                    <label>Autor del disco: </label>
                    <input value={artista} name="artista" onChange={Cambio} type="text"></input>
                </div>
                <div className="Label-Input">
                    <label>Año de publicación: </label>
                    <input value={fecha} name="fecha" onChange={Cambio} type="number"></input>
                </div>
                <button type="submit" >Agregar disco</button>
            </form>
        </div>
     );
}
 
export default Agregar;