import React, { useState, useEffect, useContext } from 'react';
import { getMonth } from "./Util/Util";
import Mes from "./Components/Mes";
import Sidebar from "./Components/Sidebar";
import EncabezadoCalendario from "./Components/EncabezadoCalendario";
import GlobalContext from "./Context/GlobalContext";
import axios from 'axios';
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const [actividades, setActividades] = useState([]);

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    console.log('tin')
    axios.post('frmCalendarioV2.aspx/ObtenerListadoActividadesxUsuxFecha', {}, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.d !== undefined) {
            setActividades(res.data.d)
            //setActividades([{ day: 1, ASUNTO_FLUJOTRABAJO: 'tin',fecha:'/Date(1649394000000)/' }, { day: 20, ASUNTO_FLUJOTRABAJO: 'tan',fecha:'/Date(1649394000000)/' }])
            //console.log(res.data.d)
          }
        }
      })
      .catch((error) => {
        //alert('Ocurrió un error !')
        setActividades([{ ASUNTO_FLUJOTRABAJO: 'tin',FECHACALFIN_FLUJOTRABAJO:undefined }, { ASUNTO_FLUJOTRABAJO: 'tan',FECHACALFIN_FLUJOTRABAJO:'/Date(1649394000000)/' }])
        //console.log(actividades)
      })
      .then(() => {
        //setActividades([{ day: 1, ASUNTO_FLUJOTRABAJO: 'tin' }, { day: 2, ASUNTO_FLUJOTRABAJO: 'tan' }])
        //setCargando(false)
      })
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <EncabezadoCalendario />
        <div className="flex flex-1">
          <Sidebar />
          <Mes mes={currenMonth} actividadesMes={actividades} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;