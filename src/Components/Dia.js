
import React,{useState,useContext,useEffect} from "react";
import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
import GlobalContext from "../Context/GlobalContext";
dayjs.locale("es");

export default function Dia({ day, rowIdx }) {
    const [dayEvents, setDayEvents] = useState([]);
    const {
      setDaySelected,
      setShowEventModal,
      filteredEvents,
      setSelectedEvent,
    } = useContext(GlobalContext);  
    
    
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().locale("es").format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
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
          setShowEventModal(true);
        }}
      >
        
      </div>
    </div>
  );
}
