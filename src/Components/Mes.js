import React ,{useContext} from "react";
import Dia from "./Dia";
import dayjs from "dayjs";
import { validaFechas,timeConvert } from "../Util/Util";
import GlobalContext from "../Context/GlobalContext";
//import axios from 'axios'
export default function Month({ mes }) {
  const {
    ActividadesMes       
  } = useContext(GlobalContext);  
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {/* {console.log(listaActividades)} */}
        
      {mes.map((row, i) => (
               
        <React.Fragment key={i}>
          {row.map((day, idx) => (            
            // <Dia day={day} key={idx} rowIdx={i} actsDia = { validaFechas(actividadesMes,day) } />
<Dia day={day} key={idx} rowIdx={i} actsDia =  {
  ActividadesMes ? 
  ActividadesMes.filter(  x  =>  {   
    // console.log('fecha: ' + typeof(x.FECHACALFIN_FLUJOTRABAJO))   
    if ((x.FECHACALINI_FLUJOTRABAJO != undefined) && (x.FECHACALINI_FLUJOTRABAJO != null) && (x.FECHACALFIN_FLUJOTRABAJO != undefined) && (x.FECHACALFIN_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
     return true    
    } 
    if ((x.FECHACALINI2_FLUJOTRABAJO != undefined) && (x.FECHACALINI2_FLUJOTRABAJO != null) && (x.FECHACALFIN2_FLUJOTRABAJO != undefined) && (x.FECHACALFIN2_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN2_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
      return true    
     } 
     if ((x.FECHACALINI3_FLUJOTRABAJO != undefined) && (x.FECHACALINI3_FLUJOTRABAJO != null) && (x.FECHACALFIN3_FLUJOTRABAJO != undefined) && (x.FECHACALFIN3_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN3_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
      return true    
     } 
     if ((x.FECHACALINI4_FLUJOTRABAJO != undefined) && (x.FECHACALINI4_FLUJOTRABAJO != null) && (x.FECHACALFIN4_FLUJOTRABAJO != undefined) && (x.FECHACALFIN4_FLUJOTRABAJO != null) && ((dayjs(timeConvert(x.FECHACALINI4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")) || (dayjs(timeConvert(x.FECHACALFIN4_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY")))){
      return true    
     }     
      return false
  } ) :[]
} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}