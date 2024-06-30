import React, { FC } from "react";
import { Checkbox } from "../../entities/Checkbox/Checkbox";
import styles from "./settings.module.scss";
import { settings } from "../../shared/config/consts";

interface SettingsProps {
  checkedState: boolean[];
  setCheckedState: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const Settings: FC<SettingsProps> = ({
  checkedState,
  setCheckedState,
}) => {
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className={styles.settingsDiv}>
      {settings.map((item, index) => {
        return (
          <div key={item.id} className={styles.divElem}>
            <Checkbox
              id={item.id}
              name={item.name}
              onChange={() => handleOnChange(index)}
              checkedState={checkedState[index]}
            />
          </div>
        );
      })}
    </div>
  );
};
