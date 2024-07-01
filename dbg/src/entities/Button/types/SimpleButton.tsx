import { FC, PropsWithChildren } from "react";
import style from "./buttonTypes.module.scss";

interface SimpleButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const SimpleButton: FC<SimpleButtonProps> = ({ onClick, children }) => (
  <div className={style.simplebutton} onClick={onClick}>
    {children}
  </div>
);
