import React,{useContext,useState,useEffect} from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";
import { validaFechas,timeConvert } from "../Util/Util";


export default function Dia({ day, rowIdx,actsDia }) {   
  //console.log(actsDia)
  const [dayEvents, setDayEvents] = useState([]);
    const {
      setDaySelected,idUsuario ,filtrarActividades       
    } = useContext(GlobalContext);  
    
    useEffect(() => {
      //console.log(filtrarActividades)
      const events = filtrarActividades.filter(
        (x) =>
        {
          if ((x.FECHACALINI_FLUJOTRABAJO != undefined) && (x.FECHACALINI_FLUJOTRABAJO != null) && (x.FECHACALFIN_FLUJOTRABAJO != undefined) && (x.FECHACALFIN_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            return true    
           } 
           
        }
      );
      console.log(events)
      setDayEvents(events);
    }, [filtrarActividades, day]);  

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  function ObtenerClaseColor(evt){  
    let claseColor = 'colorAzul'
    if (evt.ESTADO_FLUJOTRABAJO === 3){
      claseColor = 'colorVerde'
    }
    else if(evt.USUARIOSID_FLUJOTRABAJO != idUsuario && evt.ESTADO_FLUJOTRABAJO === 1){
      claseColor = 'colorAzulClaro'
    }
    else if(evt.USUARIOSID_FLUJOTRABAJO === idUsuario && evt.ESTADO_FLUJOTRABAJO === 1){
      claseColor = 'colorAzul'
    }
    return claseColor
  }
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);          
        }}
      >
        {dayEvents.map((evt, idx) => (      
          
          <div         
            key={idx}
            // onClick={() => (window.open('../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID='+ evt.FLUJOTRABAJOID_FLUJOTRABAJO, '_blank'))}
            onClick={() => (window.location.href = '../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID='+ evt.FLUJOTRABAJOID_FLUJOTRABAJO, '_blank')}
            
            className={`${ObtenerClaseColor(evt)} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
              {evt.FLUJOTRABAJOID_FLUJOTRABAJO.toLocaleString()} - {evt.ASUNTO_FLUJOTRABAJO}
          </div>
         
        ))}
      </div>
    </div>
  );
}
