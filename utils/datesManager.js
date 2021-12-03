import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);

export const formatDate = (date, format = "DD/MM/YYYY") =>
  dayjs(date).format(format);

export const disabledDate = (date) => {
  return dayjs(date).isSameOrBefore(dayjs().subtract(1, 'day'));
};
