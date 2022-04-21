import React, {
    useState,useEffect,useMemo
  } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs"; 

  export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().locale("es").month());
    const [idUsuario, setIdUsuario] = useState(0);
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [usuarios, setUsuarios] = useState([]);
    const [ActividadesMes, setActividadesMes] = useState([]);

    //const [usuarios, setUsuarios] = useState([]); 
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

    // useEffect(() => {
    //   if (idUsuario === 0) {
    //     axios.post('frmCalendarioV2.aspx/ObtenerUsuarioId', {}, {
    //       headers: { 'Content-Type': 'application/json' }
    //     })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           if (res.data.d !== undefined) {
    //             setIdUsuario(res.data.d)
    //             //setActividades([{ day: 1, ASUNTO_FLUJOTRABAJO: 'tin',fecha:'/Date(1649394000000)/' }, { day: 20, ASUNTO_FLUJOTRABAJO: 'tan',fecha:'/Date(1649394000000)/' }])
    //             console.log(res.data.d)
    //           }
    //         }
    //       }).catch((error) => {
    //         setIdUsuario(5)
    //         console.log(idUsuario)
    //       })
    //   }
    // }, [idUsuario]);

    const filtrarActividades = useMemo(() => {
      console.log(usuarios)
      return ActividadesMes.filter((evt) =>
        usuarios
          .filter((lbl) => lbl.checked)
          .map((lbl) => lbl.id)
          .includes(evt.TERCERECURSOCTROLID_FLUJOTRABAJO)
      );
    }, [ActividadesMes, usuarios]);

    function updateUsuario(usu) {
      setUsuarios(
        usuarios.map((lbl) => (lbl.id === usu.id ? usu : lbl))
      );
      //console.log(usuarios)
    }

    return (
      <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        idUsuario,
        setIdUsuario,
        usuarios,
        setUsuarios,
        updateUsuario,
        ActividadesMes,
        setActividadesMes,
        filtrarActividades
        }}>
        {props.children}
      </GlobalContext.Provider>
    );
  }
  