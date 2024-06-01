import { FC } from "react";
import { ROUTE_CONSTANTS } from "../../shared/config/routes";
import { ReactComponent as PersonAvtiveIcon } from "../../shared/assets/icons/personActive.svg";
import { ReactComponent as WeatherActiveIcon } from "../../shared/assets/icons/weatherActive.svg";
import { ReactComponent as PersonInactiveIcon } from "../../shared/assets/icons/personInactive.svg";
import { ReactComponent as WeatherInactiveIcon } from "../../shared/assets/icons/weatherInactive.svg";

interface HeaderIconProps {
  path: string;
  isActive: boolean;
}

export const HeaderIcon: FC<HeaderIconProps> = ({ path, isActive }) => {
  if (isActive) {
    switch (path) {
      case ROUTE_CONSTANTS.PERSON:
        return <PersonAvtiveIcon />;
      case ROUTE_CONSTANTS.WEATHER:
        return <WeatherActiveIcon />;
      default:
        return null;
    }
  } else {
    switch (path) {
      case ROUTE_CONSTANTS.PERSON:
        return <PersonInactiveIcon />;
      case ROUTE_CONSTANTS.WEATHER:
        return <WeatherInactiveIcon />;
      default:
        return null;
    }
  }
};
