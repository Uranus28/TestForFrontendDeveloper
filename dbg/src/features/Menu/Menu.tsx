import React, { FC } from "react";
import styles from "./menu.module.scss";
import { profilePages } from "../../shared/config/consts";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export const Menu: FC<MenuProps> = ({ mode, setMode }) => {
  return (
    <div key="menu" className={styles.menu}>
      {profilePages.map((item) => {
        return (
          <div
            key={item.id}
            className={
              mode === item.name
                ? styles.activeUnderline
                : styles.inactiveUnderline
            }
          >
            <MenuItem
              name={item.name}
              isActive={mode === item.name}
              setItem={setMode}
            />
          </div>
        );
      })}
    </div>
  );
};
