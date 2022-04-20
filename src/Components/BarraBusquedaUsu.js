import React, { useState } from "react";
import ListaUsuarios from "./ListaUsuarios";
export default function BarraBusquedaUsu() {

    const [textoBusqueda,setTextoBusqueda] = useState('')
    function buscarUsuarios(e){
        setTextoBusqueda(e.target.value)
        console.log(textoBusqueda)
    }

    return (
        <React.Fragment>            
            <input type="text" onChange={buscarUsuarios}  placeholder="  &#xf0c0;  Buscar a gente" style={{fontFamily: "FontAwesome"}} className="pt-2 border-0 text-black-200 text-l pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500  " />
            <ListaUsuarios/>
        </React.Fragment>
    );
}
