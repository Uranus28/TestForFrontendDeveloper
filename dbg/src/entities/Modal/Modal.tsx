import React, { PropsWithChildren } from "react";

import styles from "./modal.module.scss";

export const Modal: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={styles.modal}>{children}</div>
);
