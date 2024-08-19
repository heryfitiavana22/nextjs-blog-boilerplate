import dayjs from "dayjs";
import "dayjs/locale/fr";
dayjs.locale('fr')

export class DateHumanizer {
  static format(date: DateInput) {
    return dayjs(date).format("DD MMMM YYYY");
  }
}

export type DateInput = string | number | Date | dayjs.Dayjs;
