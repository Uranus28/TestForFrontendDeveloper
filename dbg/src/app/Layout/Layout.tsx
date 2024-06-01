import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { Header } from "../../widgets";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

/* <div className={styles.layout}>
<Header />
<main>
  <Outlet />
  {children}
</main>
</div> */
