import { FC } from "react";
// import RefreshButtonSVG from '../../entities/Buttons/RefreshButton.svg';
import { ReactComponent as RefreshIcon } from "../../shared/assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../shared/assets/icons/search.svg";
import styles from "./button.module.scss";
import { IconType } from "../../shared/types/iconTypes";

interface ButtonProps {
  text: string;
  // eslint-disable-next-line react/require-default-props
  icon?: IconType;
}

export const Button: FC<ButtonProps> = ({ text, icon = null }) => {
  return (
    <button className={styles.button}>
      {icon === IconType.Refresh && <RefreshIcon className={styles.icon} />}
      {icon === IconType.Search && <SearchIcon className={styles.icon} />}
      {text}
    </button>
  );
};
