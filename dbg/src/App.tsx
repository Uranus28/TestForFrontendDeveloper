import { FC } from "react";
import styles from "./App.css";
import { Button } from "./entities/Button/Button";
import { IconType } from "./shared/types/iconTypes";
import { Loader } from "./entities/Loader/Loader";

export const App: FC = () => {
  return (
    <div className={styles.body}>
      <header>
        <Button text="Refresh" icon={IconType.Refresh} />
        <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} />
        <Loader />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};
