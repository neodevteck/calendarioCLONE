import dayjs from "dayjs";
import { es } from "dayjs/locale/es";
dayjs.locale("es");

export function getMonth(month = dayjs().locale("es").month()) {
  month = Math.floor(month);
  const year = dayjs().locale("es").year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).locale("es").day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount)).locale("es");
    });
  });
  return daysMatrix;
}
