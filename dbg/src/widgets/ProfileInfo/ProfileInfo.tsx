import { FC, useState } from "react";
import styles from "./profileInfo.module.scss";
import { INFO, SETTINGS } from "../../shared/config/consts";
import { InfoPerson } from "../../features/InfoPerson/InfoPerson";
import { Menu } from "../../features/Menu/Menu";
import { Settings } from "../../features/Settings/Settings";

export const ProfileInfo: FC = () => {
  const [mode, setMode] = useState(INFO);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(4).fill(false),
  );
  return (
    <div className={styles.profileInfo}>
      <Menu mode={mode} setMode={setMode} />
      {mode === INFO && <InfoPerson />}
      {mode === SETTINGS && (
        <Settings
          checkedState={checkedState}
          setCheckedState={setCheckedState}
        />
      )}
    </div>
  );
};
