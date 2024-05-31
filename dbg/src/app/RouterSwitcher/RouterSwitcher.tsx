import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { PersonPage } from "../../pages/PersonPage/PersonPage";
import { WeatherPage } from "../../pages/WeatherPage/WeatherPage";
import { ROUTE_CONSTANTS } from "../../shared/config/routes";

export const RouterSwitcher: FC = () => {
  const router = createBrowserRouter([
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
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
