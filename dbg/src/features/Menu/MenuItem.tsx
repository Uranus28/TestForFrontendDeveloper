import React, { FC } from "react";
import styles from "./menu.module.scss";

interface MenuItemProps {
  name: string;
  isActive: boolean;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

export const MenuItem: FC<MenuItemProps> = ({ name, isActive, setItem }) => {
  return (
    <button
      className={isActive ? styles.iActive : styles.iInactive}
      onClick={() => setItem(name)}
    >
      {name}
    </button>
  );
};
