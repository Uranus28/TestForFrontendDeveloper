import { FC } from "react";
import { Button } from "../../entities/Button/Button";
import { IconType } from "../../shared/types/iconTypes";
import styles from "./searchbar.module.scss";

export const SearchBar: FC = () => {
  return (
    <div className={styles.searchBar}>
      <input className={styles.input} id="search" name="search" />
      <Button type="simple" text="Search" icon={IconType.Search} />
    </div>
  );
};
