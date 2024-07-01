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
          <div className={styles.text}>
            Name: &nbsp;
            <input id="name" name="name" />
          </div>
          <div className={styles.text}>
            Surname:&nbsp;
            <input id="surname" name="surname" />
          </div>
          <div className={styles.text}>
            Login:&nbsp;
            <input id="login" name="login" />
          </div>
          <div className={styles.text}>
            E-mail:&nbsp;
            <input id="email" type="email" name="email" />
          </div>
          <div className={styles.text}>
            Gender:&nbsp;
            <input id="gender" name="gender" />
          </div>
          <div className={styles.text}>
            Date of Birth:&nbsp;
            <input type="date" id="date" name="date" />
          </div>
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
