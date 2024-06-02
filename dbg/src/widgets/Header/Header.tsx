/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import styles from "./header.module.scss";
import { pages } from "../../shared/config/consts";
import { LinkH } from "../../features/Link/LinkH";

export const Header: FC = () => {
  const [page, setPage] = useState(window.location.pathname);
  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        {pages.map((navItem) => {
          if (page === navItem.link)
            return (
              <LinkH
                name={navItem.name}
                link={navItem.link}
                hasIcon
                isActive
                setPage={setPage}
              />
            );
          return (
            <LinkH
              name={navItem.name}
              link={navItem.link}
              hasIcon
              isActive={false}
              setPage={setPage}
            />
          );
        })}
      </ul>
    </header>
  );
};

// <a
//   key={navItem.name}
//   className={styles.aActive}
//   href={navItem.link}
//   onClick={() => console.log(navItem.link)}
//   //   onClick={() => setPage(window.location.pathname)}
// >
//   {navItem.icon === IconType.Person && page === navItem.link ? (
//     <PersonAvtiveIcon />
//   ) : (
//     <PersonInactiveIcon />
//   )}
//   {navItem.icon === IconType.Weather && <WeatherActiveIcon />}
//   {navItem.name}
// </a>
