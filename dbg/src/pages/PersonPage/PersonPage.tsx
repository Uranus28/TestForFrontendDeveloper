import { FC, useState } from "react";
import { Button } from "../../entities/Button/Button";
import { Loader } from "../../entities/Loader/Loader";
import { IconType } from "../../shared/types/iconTypes";
import styles from "./personPage.module.scss";
import { Container } from "../../entities/Container/Container";
import { Profile } from "../../widgets/Profile/Profile";
import { ProfileInfo } from "../../widgets/ProfileInfo/ProfileInfo";
import { Modal } from "../../entities/Modal/Modal";
import { ReactComponent as ExitIcon } from "../../shared/assets/icons/xButton.svg";
import { ModalChangeInfo } from "../../widgets/ModalChangeInfo/ModalChangeInfo";

export const PersonPage: FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.insideBox}>
          <Profile
            setModal={() => {
              setModal(!modal);
            }}
          />
          <ProfileInfo />
        </div>
        <div className={styles.buttonBox}>
          <Button text="Refresh" type="default" icon={IconType.Refresh} />
        </div>

        {/* <div>
        <Loader />
      </div> */}
        {/* <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} /> */}
      </div>
      {modal && (
        <ModalChangeInfo
          setModal={() => {
            setModal(!modal);
          }}
        />
      )}
    </Container>
  );
};
