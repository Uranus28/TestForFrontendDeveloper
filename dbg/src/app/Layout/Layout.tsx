import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Header } from "../../widgets";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
