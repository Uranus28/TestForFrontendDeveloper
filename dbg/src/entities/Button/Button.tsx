import { FC } from "react";
import { ReactComponent as RefreshIcon } from "../../shared/assets/icons/refresh.svg";
import { ReactComponent as SearchIcon } from "../../shared/assets/icons/search.svg";
import style from "./types/buttonTypes.module.scss";
import { IconType } from "../../shared/types/iconTypes";
import { BigButton } from "./types/BigButton";
import { SimpleButton } from "./types/SimpleButton";
import { DefaultButton } from "./types/DefaultButton";

interface ButtonProps {
  text: string;
  icon?: IconType;
  onClick?: () => void;
  type?: "simple" | "big" | "default";
}

export const Button: FC<ButtonProps> = ({
  text,
  icon = null,
  onClick = () => {},
  type = "default",
}) => {
  switch (type) {
    case "simple":
      return (
        <SimpleButton onClick={onClick}>
          {icon === IconType.Refresh && <RefreshIcon className={style.icon} />}
          {icon === IconType.Search && <SearchIcon className={style.icon} />}
          <p className={style.text}>{text}</p>
        </SimpleButton>
      );
    case "big":
      return (
        <BigButton onClick={onClick}>
          {icon === IconType.Refresh && <RefreshIcon className={style.icon} />}
          {icon === IconType.Search && <SearchIcon className={style.icon} />}
          <p className={style.text}>{text}</p>
        </BigButton>
      );
    default:
      return (
        <DefaultButton onClick={onClick}>
          {icon === IconType.Refresh && <RefreshIcon className={style.icon} />}
          {icon === IconType.Search && <SearchIcon className={style.icon} />}
          <p className={style.text}>{text}</p>
        </DefaultButton>
      );
  }
};
