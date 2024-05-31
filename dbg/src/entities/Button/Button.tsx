import { FC } from "react";
import { ReactComponent as RefreshIcon } from "../../shared/assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../shared/assets/icons/search.svg";
import style from "./button.module.scss";
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
    <button className={style.button} onClick={onClick}>
      {icon === IconType.Refresh && <RefreshIcon className={style.icon} />}
      {icon === IconType.Search && <SearchIcon className={style.icon} />}
      {text}
    </button>
  );
};
