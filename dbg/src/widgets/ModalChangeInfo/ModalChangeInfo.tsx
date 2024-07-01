import { FC } from "react";
import styles from "./modalChangeInfo.module.scss";
import { Modal } from "../../entities/Modal/Modal";
import { ReactComponent as ExitIcon } from "../../shared/assets/icons/xButton.svg";
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
