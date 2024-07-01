import { FC, PropsWithChildren } from "react";
import style from "./buttonTypes.module.scss";

interface BigButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const BigButton: FC<BigButtonProps> = ({ onClick, children }) => (
  <div className={style.bigbutton} onClick={onClick}>
    {children}
  </div>
);
