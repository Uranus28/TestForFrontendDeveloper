import { IconType } from "../types/iconTypes";
import { ROUTE_CONSTANTS } from "./routes";

export const pages = [
  {
    name: "Person",
    link: ROUTE_CONSTANTS.PERSON,
    icon: IconType.Person,
  },
  {
    name: "Weather",
    link: ROUTE_CONSTANTS.WEATHER,
    icon: IconType.Weather,
  },
];

export const INFO = "Information";
export const SETTINGS = "Settings";

export const profilePages = [
  {
    name: INFO,
    id: "0",
  },
  {
    name: SETTINGS,
    id: "1",
  },
];

export const settings = [
  {
    name: "Amet minim mollit non deserunt",
    id: "0",
  },
  {
    name: "Amet minim mollit non deserunt",
    id: "1",
  },
  {
    name: "Amet minim mollit non deserunt",
    id: "2",
  },
  {
    name: "Amet minim mollit non deserunt",
    id: "3",
  },
];
