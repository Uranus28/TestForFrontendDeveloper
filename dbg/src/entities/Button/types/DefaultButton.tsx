import { FC, PropsWithChildren } from "react";
import style from "./buttonTypes.module.scss";

interface DefaultButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({
  onClick,
  children,
}) => (
  <div className={style.defaultbutton} onClick={onClick}>
    {children}
  </div>
);
