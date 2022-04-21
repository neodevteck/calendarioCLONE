import React ,{useContext} from 'react'
import GlobalContext from "../Context/GlobalContext";

export default function ListaUsuarios({ lis }) {
  const { updateUsuario } = useContext(GlobalContext);
  function AgregarUsuario(obj){
    updateUsuario({id:obj.id,nombre:obj.nombre,checked:true})
  }
  return (    
    <ul className="suggestions">     
      {lis.map((row,i) => (
         <React.Fragment key={i}>
        <li className="" onClick={ () => AgregarUsuario(row)}>
          {row.NOMCOMPL_USU}
        </li>
        </React.Fragment>
      ))}
    </ul>
  )
}
