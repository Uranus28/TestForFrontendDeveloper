import { FC } from "react";
// import RefreshButtonSVG from '../../entities/Buttons/RefreshButton.svg';
import { ReactComponent as RefreshIcon } from "../../shared/assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../shared/assets/icons/search.svg";
import styles from "./button.module.scss";
import { IconType } from "../../shared/types/iconTypes";

interface ButtonProps {
  text: string;
  icon?: IconType;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  text,
  icon = null,
  onClick = () => {},
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon === IconType.Refresh && <RefreshIcon className={styles.icon} />}
      {icon === IconType.Search && <SearchIcon className={styles.icon} />}
      {text}
    </button>
  );
};
