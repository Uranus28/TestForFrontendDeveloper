import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { PersonPage } from "../../pages/PersonPage/PersonPage";
import { WeatherPage } from "../../pages/WeatherPage/WeatherPage";
import { ROUTE_CONSTANTS } from "../../shared/config/routes";
import { Layout } from "../Layout/Layout";

export const RouterSwitcher: FC = () => {
  const router = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: ROUTE_CONSTANTS.PERSON,
          element: <PersonPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: ROUTE_CONSTANTS.WEATHER,
          element: <WeatherPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return router;
};
