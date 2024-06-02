import React, { FC, SVGProps } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconType } from "../../shared/types/iconTypes";
import styles from "./linkH.module.scss";
import { HeaderIcon } from "../../widgets/Header/HeaderIcon";

interface LinkHProps {
  name: string;
  link: string;
  hasIcon: boolean;
  isActive: boolean;
}

export const LinkH: FC<LinkHProps> = ({
  name,
  link,
  hasIcon = false,
  isActive,
}) => {
  // const navigate = useNavigate();

  // const navigate = useNavigate();
  return (
    // <link
    //   key={name}
    //   className={isActive ? styles.aActive : styles.aInactive}
    //   href={link}
    //   // onClick={() => {
    //   //   navigate(link);
    //   // }}
    // >
    //   {hasIcon && <HeaderIcon path={link as string} isActive={isActive} />}
    //   {name}
    // </link>
    // to={link}
    // <Link
    //   key={name}
    //   className={isActive ? styles.aActive : styles.aInactive}
    //   to={link}
    // >
    //   {hasIcon && <HeaderIcon path={link as string} isActive={isActive} />}
    //   {name}
    // </Link>
    <a
      key={name}
      className={isActive ? styles.aActive : styles.aInactive}
      href={link}
    >
      {hasIcon && <HeaderIcon path={link as string} isActive={isActive} />}
      {name}
    </a>
  );
};
