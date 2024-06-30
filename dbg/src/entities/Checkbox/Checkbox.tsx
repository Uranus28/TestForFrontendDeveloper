import { FC } from "react";
import styles from "./checkbox.module.scss";
import { ReactComponent as CheckedIcon } from "../../shared/assets/icons/checked.svg";

interface CheckboxProps {
  id: string;
  name: string;
  onChange: () => void;
  checkedState: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  onChange,
  checkedState,
}) => {
  const handleClick = () => {
    onChange();
  };
  return (
    <div
      className={checkedState ? styles.activeCheckbox : styles.inactiveCheckbox}
    >
      <button
        id={id}
        className={styles.checkbox}
        onClick={handleClick}
        onKeyDown={() => {}}
      >
        {checkedState && <CheckedIcon className={styles.icon} />}
      </button>
      {name}
    </div>
  );
};
