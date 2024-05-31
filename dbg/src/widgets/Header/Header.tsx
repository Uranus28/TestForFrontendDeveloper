import { FC } from "react";
import styles from "./header.module.scss";
import { pages } from "../../shared/config/consts";
import { IconType } from "../../shared/types/iconTypes";
import { ReactComponent as PersonAvtiveIcon } from "../../shared/assets/icons/personActive.svg";
import { ReactComponent as WeatherActiveIcon } from "../../shared/assets/icons/weatherActive.svg";
import { ReactComponent as PersonInactiveIcon } from "../../shared/assets/icons/personInactive.svg";
import { ReactComponent as WeatherInactiveIcon } from "../../shared/assets/icons/weatherInactive.svg";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        {pages.map((navItem) => {
          return (
            <a className={styles.aActive} href={navItem.link}>
              {navItem.icon === IconType.Person && <PersonAvtiveIcon />}
              {navItem.icon === IconType.Weather && <WeatherActiveIcon />}
              {navItem.name}
            </a>
          );
        })}
      </ul>
    </header>
  );
};
