import { Query } from "../lib/types";
import { formatDateWithTime, getFormattedDate } from "./utils";

export const constructTGAUrl = (queryParams?: Query): string => {
  const query =
    queryParams?.keyword || queryParams?.category || "international";

  const hasDate =
    queryParams?.rangeDate?.startDate || queryParams?.rangeDate?.endDate;

  const rangeDate = hasDate
    ? `&from-date=${queryParams?.rangeDate?.startDate || "2014-01-01"}`
    : "";

  return `${import.meta.env.VITE_REACT_THE_GUARDIAN}?q=${query}${rangeDate}&api-key=${import.meta.env.VITE_REACT_THE_GUARDIAN_SECRET}`;
};

export const constructNAOrgUrl = (queryParams?: Query): string => {
  const date = new Date();
  date.setDate(date.getDate() - 15);

  const query =
    queryParams?.keyword || queryParams?.category || "international";

  const hasDate =
    queryParams?.rangeDate?.startDate || queryParams?.rangeDate?.endDate;

  const rangeDate = hasDate
    ? `&from=${queryParams?.rangeDate?.startDate || formatDateWithTime(date)}&to=${queryParams?.rangeDate?.endDate || formatDateWithTime(new Date())}`
    : "";

  return `${import.meta.env.VITE_REACT_NEWS_API_ORG}?q=${query}${rangeDate}&apiKey=${import.meta.env.VITE_REACT_NEWS_API_ORG_SECRET}`;
};

export const constructNYTUrl = (queryParams?: Query): string => {
  const query =
    queryParams?.keyword || queryParams?.category || "international";

  const hasDate =
    queryParams?.rangeDate?.startDate || queryParams?.rangeDate?.endDate;

  const rangeDate = hasDate
    ? `&begin_date=${queryParams?.rangeDate?.startDate || getFormattedDate(new Date())}&end_date=${queryParams?.rangeDate?.endDate || getFormattedDate(new Date())}`
    : "";

  return `${import.meta.env.VITE_REACT_NEW_YORK_TIMES}?q=${query}${rangeDate}&api-key=${import.meta.env.VITE_REACT_NEW_YORK_TIMES_SECRET}`;
};
