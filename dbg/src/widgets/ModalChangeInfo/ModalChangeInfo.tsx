import { FC } from "react";
import styles from "./modalChangeInfo.module.scss";
import { Modal } from "../../entities/Modal/Modal";
import { ReactComponent as ExitIcon } from "../../shared/assets/icons/xButton.svg";
import { ReactComponent as DateIcon } from "../../shared/assets/icons/date.svg";
import { Button } from "../../entities/Button/Button";
import { IconType } from "../../shared/types/iconTypes";

interface ModalChangeInfoProps {
  setModal: () => void;
}

export const ModalChangeInfo: FC<ModalChangeInfoProps> = ({ setModal }) => {
  return (
    <Modal>
      <div className={styles.modal}>
        <ExitIcon className={styles.exitIcon} onClick={setModal} />
        <div className={styles.modalInfo}>
          <p className={styles.editProfile}>Edit profile</p>
          <p className={styles.text}>
            Name: &nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="name" name="name" />
            </div>
          </p>
          <p className={styles.text}>
            Surname:&nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="surname" name="surname" />
            </div>
          </p>
          <p className={styles.text}>
            Login:&nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="login" name="login" />
            </div>
          </p>
          <p className={styles.text}>
            E-mail:&nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="email" name="email" />
            </div>
          </p>
          <p className={styles.text}>
            Gender:&nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="gender" name="gender" />
            </div>
          </p>
          <p className={styles.text}>
            Date of Birth:&nbsp;
            <div className={styles.inputDiv}>
              <input className={styles.input} id="date" name="date" />
              <DateIcon className={styles.dateButton} />
            </div>
          </p>
          <div className={styles.saveButton}>
            <Button
              text="Save"
              type="big"
              icon={IconType.Date}
              onClick={setModal}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
