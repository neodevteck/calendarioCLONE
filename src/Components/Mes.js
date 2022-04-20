import React  from "react";
import Dia from "./Dia";
import dayjs from "dayjs";
import { validaFechas,timeConvert } from "../Util/Util";
//import axios from 'axios'
export default function Month({ mes ,actividadesMes}) {
  //console.log(mes)
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
        {/* {console.log(listaActividades)} */}
        
      {mes.map((row, i) => (
               
        <React.Fragment key={i}>
          {row.map((day, idx) => (            
            // <Dia day={day} key={idx} rowIdx={i} actsDia = { validaFechas(actividadesMes,day) } />
<Dia day={day} key={idx} rowIdx={i} actsDia = {
  
  actividadesMes.filter(  x  =>  {   
    console.log('fecha: ' + typeof(x.FECHACALFIN_FLUJOTRABAJO))    
    if ((typeof(x.FECHACALFIN_FLUJOTRABAJO) != 'undefined') && (typeof(x.FECHACALFIN_FLUJOTRABAJO) != 'null') && (dayjs(timeConvert(x.FECHACALFIN_FLUJOTRABAJO)).format("DD-MM-YY")  === day.format("DD-MM-YY"))){
     return true    
    } 
   return false
  } )

} />
            
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}