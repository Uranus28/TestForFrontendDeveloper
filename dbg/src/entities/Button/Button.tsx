import { FC } from "react";
import { ReactComponent as RefreshIcon } from "../../shared/assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../shared/assets/icons/search.svg";
import style from "./button.module.scss";
import { IconType } from "../../shared/types/iconTypes";

interface ButtonProps {
  text: string;
  icon?: IconType;
  onClick?: () => void;
  type?: "simple" | "default";
}

export const Button: FC<ButtonProps> = ({
  text,
  icon = null,
  onClick = () => {},
  type = "default",
}) => {
  return (
    <button
      className={type === "simple" ? style.buttonSimplified : style.button}
      onClick={onClick}
    >
      {icon === IconType.Refresh && <RefreshIcon className={style.icon} />}
      {icon === IconType.Search && <SearchIcon className={style.icon} />}
      <p className={style.text}>{text}</p>
    </button>
  );
};
