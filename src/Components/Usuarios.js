import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

export default function Usuarios() {
  const { usuarios, updateUsuario } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Usuarios</p>
      {usuarios.map(({ id, checked,nombre }, idx) => (
        
        <label key={idx} className="items-center mt-3 block">
            {console.log(id)}
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
            
                updateUsuario({ id: id, checked: !checked,nombre:nombre })
            }
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{nombre}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
