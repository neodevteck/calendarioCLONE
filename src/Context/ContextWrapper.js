import React, {
    useState,useEffect
  } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs"; 
  //import axios from "axios";

  export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().locale("es").month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    // const [usuarios, setUsuarios] = useState([]); 
    //const [actividades, setActividades] = useState([]); 

    // useEffect(() => {
    //   console.log('tin')
    //   axios.post('frmCalendarioV2.aspx/ObtenerListadoActividadesxUsuxFecha', {}, {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         if (res.data.d !== undefined) {
    //           setActividades(res.data.d)
    //           //console.log(res.data.d)
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       //alert('Ocurrió un error !')
    //       setActividades([{day:1,ASUNTO_FLUJOTRABAJO:'tin'},{day:2,ASUNTO_FLUJOTRABAJO:'tan'}])
    //       console.log(actividades)
    //     })
    //     .then(() => {
    //       //setCargando(false)
    //     })
    // }, [actividades])

    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
        //console.log(monthIndex)
      }
    }, [smallCalendarMonth]);

    return (
      <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected
        }}>
        {props.children}
      </GlobalContext.Provider>
    );
  }
  