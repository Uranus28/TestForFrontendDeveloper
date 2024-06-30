import { FC } from "react";
import styles from "./weatherInfo.module.scss";
import { ReactComponent as SunIcon } from "../../shared/assets/icons/sun.svg";

export const WeatherInfo: FC = () => {
  return (
    <div className={styles.weather}>
      <p className={styles.place}>Russia, Perm</p>
      <p className={styles.date}>MON, 11 APRIL 2024</p>
      <SunIcon className={styles.icon} />
      <p className={styles.tempr}>30 °C</p>
      <p className={styles.curTemp}>CURRENT TEMPERATURE</p>
      <p className={styles.feels}>
        Feels like &nbsp;
        <span className={styles.mediumSmall}>33 °C</span>
      </p>
    </div>
  );
};
