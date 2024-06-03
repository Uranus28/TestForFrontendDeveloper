/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./header.module.scss";
import { pages } from "../../shared/config/consts";
import { LinkH } from "../../features/Link/LinkH";

export const Header: FC = () => {
  const [page, setPage] = useState(window.location.pathname);
  // to listen for page update
  const location = useLocation();

  useEffect(() => {
    setPage(window.location.pathname);
  }, [location]);

  return (
    <header className={styles.header}>
      <div key="header-cont" className={styles.ul}>
        {pages.map((navItem) => {
          return (
            <div key={navItem.name}>
              <LinkH
                name={navItem.name}
                link={navItem.link}
                hasIcon
                isActive={page === navItem.link}
                setPage={setPage}
              />
            </div>
          );
        })}
      </div>
    </header>
  );
};
