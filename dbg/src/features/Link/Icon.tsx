import { FC } from "react";
import { ROUTE_CONSTANTS } from "../../shared/config/routes";
import styles from "./linkH.module.scss";
import { ReactComponent as PersonIcon } from "../../shared/assets/icons/person.svg";
import { ReactComponent as WeatherIcon } from "../../shared/assets/icons/weather.svg";

interface IconProps {
  path: string;
}

export const Icon: FC<IconProps> = ({ path }) => {
  switch (path) {
    case ROUTE_CONSTANTS.PERSON:
      return <PersonIcon className={styles.headerIcon} />;
    case ROUTE_CONSTANTS.WEATHER:
      return <WeatherIcon className={styles.headerIcon} />;
    default:
      return null;
  }
};
