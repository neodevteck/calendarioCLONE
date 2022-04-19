import React,  { useState,useEffect,useContext }from 'react';
import { getMonth } from "./Util/Util";
import Mes from "./Components/Mes";
import Sidebar from "./Components/Sidebar";
import EncabezadoCalendario from "./Components/EncabezadoCalendario";
import GlobalContext from "./Context/GlobalContext";

function App(){ 
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex} = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>      
      <div className="h-screen flex flex-col">
      <EncabezadoCalendario />
        <div className="flex flex-1">   
            <Sidebar />
          <Mes mes={currenMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;