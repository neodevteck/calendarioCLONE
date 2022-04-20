import React from "react";
import MiniCalendario from "./MiniCalendario";
import BarraBusquedaUsu from "./BarraBusquedaUsu";


export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">   
     
      <MiniCalendario />     
      <BarraBusquedaUsu />     
    </aside>
  );
}
