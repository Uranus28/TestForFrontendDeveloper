import React, {FC} from 'react';
import styles from './App.css';
import {RefreshButton} from './shared/RefreshButton/RefreshButton';

export const App: FC = () => {
  return (
    <div className={styles.body}>
      <header>
        <RefreshButton />
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
