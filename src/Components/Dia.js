import React,{useContext,useState,useEffect} from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";
import { timeConvert } from "../Util/Util";
import Hora from "./Hora";

let arrHoras = [{hora:1,jornada:'am',horam:1},{hora:2,jornada:'am',horam:2},{hora:3,jornada:'am',horam:3},
  {hora:4,jornada:'am',horam:4},{hora:5,jornada:'am',horam:5},{hora:6,jornada:'am',horam:1},{hora:7,jornada:'am',horam:7},
  {hora:8,jornada:'am',horam:8},{hora:9,jornada:'am',horam:9},{hora:10,jornada:'am',horam:10},{hora:11,jornada:'am',horam:11},
  {hora:12,jornada:'am',horam:12},{hora:1,jornada:'pm',horam:13},{hora:2,jornada:'pm',horam:14},{hora:3,jornada:'pm',horam:15},
  {hora:4,jornada:'pm',horam:16},{hora:5,jornada:'pm',horam:17},{hora:6,jornada:'pm',horam:18},{hora:7,jornada:'pm',horam:19},
  {hora:8,jornada:'pm',horam:20},{hora:9,jornada:'pm',horam:21},{hora:10,jornada:'pm',horam:22},{hora:11,jornada:'pm',horam:23}]

export default function Dia({ day, rowIdx }) {   
  //console.log(day)
  //let arrHoras = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  

  const [dayEvents, setDayEvents] = useState([]);
    const {
      setDaySelected,idUsuario ,opcionVista,ActividadesMes,filtrarActividades       
    } = useContext(GlobalContext);  
    
    useEffect(() => {
      //console.log(filtrarActividades)
      // const events =
      // filtrarActividades?
      // filtrarActividades.filter(
      //   (x) =>
      //   {
          
      //     if ((x.FECHACALINI_FLUJOTRABAJO != undefined) && (x.FECHACALINI_FLUJOTRABAJO != null) && (x.FECHACALFIN_FLUJOTRABAJO != undefined) && (x.FECHACALFIN_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            
      //       return true    
      //      } 
      //      if ((x.FECHACALINI2_FLUJOTRABAJO != undefined) && (x.FECHACALINI2_FLUJOTRABAJO != null) && (x.FECHACALFIN2_FLUJOTRABAJO != undefined) && (x.FECHACALFIN2_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            
      //       return true    
      //      } 
      //      if ((x.FECHACALINI3_FLUJOTRABAJO != undefined) && (x.FECHACALINI3_FLUJOTRABAJO != null) && (x.FECHACALFIN3_FLUJOTRABAJO != undefined) && (x.FECHACALFIN3_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            
      //       return true    
      //      } 
      //      if ((x.FECHACALINI4_FLUJOTRABAJO != undefined) && (x.FECHACALINI4_FLUJOTRABAJO != null) && (x.FECHACALFIN4_FLUJOTRABAJO != undefined) && (x.FECHACALFIN4_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            
      //       return true    
      //      }
          
      //      return false
      //   }
      // ):[]

        let events = []
        let contador = 0;
        for (let i = 0; i < filtrarActividades.length; i++) {
          
          if ((filtrarActividades[i].FECHACALINI_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALINI_FLUJOTRABAJO != null) && (filtrarActividades[i].FECHACALFIN_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALFIN_FLUJOTRABAJO != null) && ((dayjs(timeConvert(filtrarActividades[i].FECHACALINI_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(filtrarActividades[i].FECHACALFIN_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            events.push(filtrarActividades[i])
            contador++
            //return true    
           } 
           if ((filtrarActividades[i].FECHACALINI2_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALINI2_FLUJOTRABAJO != null) && (filtrarActividades[i].FECHACALFIN2_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALFIN2_FLUJOTRABAJO != null) && ((dayjs(timeConvert(filtrarActividades[i].FECHACALINI2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(filtrarActividades[i].FECHACALFIN2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            events.push(filtrarActividades[i])
            contador++
            //return true    
           } 
           if ((filtrarActividades[i].FECHACALINI3_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALINI3_FLUJOTRABAJO != null) && (filtrarActividades[i].FECHACALFIN3_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALFIN3_FLUJOTRABAJO != null) && ((dayjs(timeConvert(filtrarActividades[i].FECHACALINI3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(filtrarActividades[i].FECHACALFIN3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            events.push(filtrarActividades[i])
            contador++
            //return true    
           } 
           if ((filtrarActividades[i].FECHACALINI4_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALINI4_FLUJOTRABAJO != null) && (filtrarActividades[i].FECHACALFIN4_FLUJOTRABAJO != undefined) && (filtrarActividades[i].FECHACALFIN4_FLUJOTRABAJO != null) && ((dayjs(timeConvert(filtrarActividades[i].FECHACALINI4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(filtrarActividades[i].FECHACALFIN4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
            events.push(filtrarActividades[i])
            contador++
            //return true    
           }
           if (contador > 3){
             break;
           }
        }

      //(contador)
      setDayEvents(events);
    }, [ActividadesMes, day]);  

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
    opcionVista == 1 ?
    <div className="border border-gray-200 flex flex-col ">
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
            onClick={() => (window.location.href = `../../FlujodeTrabajo/Formularios/frmCrearActividades.aspx?Formulario=frmCreaActividades&ID=${evt.FLUJOTRABAJOID_FLUJOTRABAJO}` , '_blank')}
            
            className={`${ObtenerClaseColor(evt)} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
              {evt.FLUJOTRABAJOID_FLUJOTRABAJO.toLocaleString()} - {evt.ASUNTO_FLUJOTRABAJO}
          </div>
        ))}
      </div>
    </div> :
     <div className="flex-1 grid grid-cols-1 grid-rows-24">   
     
      <React.Fragment>
        {
        arrHoras.map((hora, idx) => (
        <Hora hora = {hora.hora} jornada = {hora.jornada} eventos={
          dayEvents ?
          dayEvents.filter(
            (x) =>
            {
              if ((x.HORACALINI_FLUJOTRABAJO != undefined) && (x.HORACALINI_FLUJOTRABAJO != null) && (x.HORACALFIN_FLUJOTRABAJO != undefined) && (x.HORACALFIN_FLUJOTRABAJO != null) && (x.HORACALINI_FLUJOTRABAJO.Hours  === hora.horam || x.HORACALFIN_FLUJOTRABAJO.Hours  === hora.horam)){
                return true    
               } 
               if ((x.HORACALINI2_FLUJOTRABAJO != undefined) && (x.HORACALINI2_FLUJOTRABAJO != null) && (x.HORACALFIN2_FLUJOTRABAJO != undefined) && (x.HORACALFIN2_FLUJOTRABAJO != null) && (x.HORACALINI2_FLUJOTRABAJO.Hours  === hora.horam || x.HORACALFIN2_FLUJOTRABAJO.Hours  === hora.horam)){
                return true    
               } 
               if ((x.HORACALINI3_FLUJOTRABAJO != undefined) && (x.HORACALINI3_FLUJOTRABAJO != null) && (x.HORACALFIN3_FLUJOTRABAJO != undefined) && (x.HORACALFIN3_FLUJOTRABAJO != null) && (x.HORACALINI3_FLUJOTRABAJO.Hours  === hora.horam || x.HORACALFIN3_FLUJOTRABAJO.Hours  === hora.horam)){
                return true    
               } 
               if ((x.HORACALINI4_FLUJOTRABAJO != undefined) && (x.HORACALINI4_FLUJOTRABAJO != null) && (x.HORACALFIN4_FLUJOTRABAJO != undefined) && (x.HORACALFIN4_FLUJOTRABAJO != null) && (x.HORACALINI4_FLUJOTRABAJO.Hours  === hora.horam || x.HORACALFIN4_FLUJOTRABAJO.Hours  === hora.horam)){
                return true    
               } 
               return false
            }
          ) : []          
        } 
  
        />
        )
        )}
      </React.Fragment>
      </div>
  );
}
