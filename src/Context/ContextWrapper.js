import React, {
    useState,useEffect
  } from "react";
  import GlobalContext from "./GlobalContext";
  import dayjs from "dayjs"; 

  export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().locale("es").month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
      setUsuarios((prevUsuarios) => {
        return [...new Set(savedUsuarios.map((x) => x.id))].map(
          (id) => {
            const currentLabel = prevUsuarios.find(
              (lbl) => lbl.id === id
            );
            return {
              id,
              checked: currentLabel ? currentLabel.checked : true,
            };
          }
        );
      });
    }, [savedEvents]);

    useEffect(() => {
      if (smallCalendarMonth !== null) {
        setMonthIndex(smallCalendarMonth);
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
  