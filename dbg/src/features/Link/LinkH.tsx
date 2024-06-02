import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import styles from "./linkH.module.scss";

interface LinkHProps {
  name: string;
  link: string;
  hasIcon: boolean;
  isActive: boolean;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const LinkH: FC<LinkHProps> = ({
  name,
  link,
  hasIcon = false,
  isActive,
  setPage,
}) => {
  return (
    <Link
      key={name}
      className={isActive ? styles.aActive : styles.aInactive}
      to={link}
      onClick={() => setPage(link)}
    >
      {hasIcon && <Icon path={link as string} />}
      {name}
    </Link>
  );
};
