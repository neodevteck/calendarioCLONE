import React, { useState, useEffect, useContext } from 'react';
import { getDay, getMonth } from "./Util/Util";
import Mes from "./Components/Mes";
import Dia from "./Components/Dia"
import Sidebar from "./Components/Sidebar";
import EncabezadoCalendario from "./Components/EncabezadoCalendario";
import GlobalContext from "./Context/GlobalContext";
import axios from 'axios';
import dayjs from "dayjs";
let actividades = require('./Const/Actividades')
let usuario = require('./Const/Usuario')

function App() {
console.log('APP')
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { dayIndex,monthIndex,setIdUsuario,setUsuarios,setActividadesMes,usuarios,opcionVista,daySelected } = useContext(GlobalContext);
    
// useEffect(() => {
//     setIdUsuario(5)
//     setUsuarios(usuario)
//     setActividadesMes(actividades)
//     console.log(actividades)
//     setCurrentMonth(getMonth(monthIndex));
//     //let arrIds = usuarios.map(x => x.id)   
// }, [monthIndex]) 

  useEffect(() => {
   
    //   axios.post('frmCalendarioV2.aspx/ObtenerUsuario', {}, {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         if (res.data.d !== undefined) {
    //           let idUsu = res.data.d.id
    //           let nomUsu = res.data.d.nombre
    //           setIdUsuario(idUsu)
    //           setUsuarios([{id:idUsu,nombre:nomUsu,checked:true}])           
    //         }
    //       }
    //     }).catch((error) => {        
    //     })
    setIdUsuario(2041)
    setUsuarios(usuario)
  }, [setIdUsuario,setUsuarios]);


  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    let arrIds = usuarios.map(x => x.id)   
    // axios.post('frmCalendarioV2.aspx/ObtenerActividadesxTerceIdxFechaInixFechaFin', {FechaInicial:dayjs(getMonth(monthIndex)[0][0]).format("DD-MM-YY").toString(),FechaFinal:dayjs(getMonth(monthIndex)[4][6]).format("DD-MM-YY").toString(),ArrIds: arrIds ? arrIds : []}, {
    //   headers: { 'Content-Type': 'application/json' }
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       if (res.data.d !== undefined) {           
    //         setActividadesMes(res.data.d)   
    //         console.log(res.data.d)     
    //       }
    //     }
    //   })
    //   .catch((error) => {              
    //   })
   
    setActividadesMes(actividades)    
    setCurrentMonth(getMonth(monthIndex));
      console.log(actividades)
  }, [dayIndex,monthIndex,setActividadesMes,usuarios]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <EncabezadoCalendario />
        <div className="flex flex-1">
          <Sidebar />
          
          { opcionVista == 1 ?  <Mes mes={currenMonth} /> : 
      
          usuarios.map( x => (
            <Dia day={daySelected} key={1} rowIdx={1}/>
            )
          )
}
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;