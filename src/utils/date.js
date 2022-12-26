import dayjs from "dayjs";

const DATE_FORMAT = "YYYY.MM.DD HH:mm";

export const now = () => {
  const now = dayjs();
  return now.format(DATE_FORMAT);
};
