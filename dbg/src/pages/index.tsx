import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";
import { PersonPage } from "./PersonPage/PersonPage";
import { WeatherPage } from "./WeatherPage/WeatherPage";
import { NotFound } from "./NotFound/NotFound";

export const RouterSwitcher: FC = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path={ROUTE_CONSTANTS.PERSON} element={<PersonPage />} />
    <Route path={ROUTE_CONSTANTS.WEATHER} element={<WeatherPage />} />
    <Route path={ROUTE_CONSTANTS.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
