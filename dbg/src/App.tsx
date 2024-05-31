import { FC } from "react";
import styles from "./App.css";
import { Button } from "./entities/RefreshButton/Button";
import { IconType } from "./shared/types/iconTypes";

export const App: FC = () => {
  return (
    <div className={styles.body}>
      <header>
        <Button text="Refresh" icon={IconType.Refresh} />
        <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} />
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
