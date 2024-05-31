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
