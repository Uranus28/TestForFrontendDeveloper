import { FC } from "react";
import { Button } from "../../entities/Button/Button";
import { Loader } from "../../entities/Loader/Loader";
import { IconType } from "../../shared/types/iconTypes";
import styles from "./personPage.module.scss";
import { Container } from "../../shared/Container/Container";
import { Profile } from "../../widgets/Profile/Profile";
import { ProfileInfo } from "../../widgets/ProfileInfo/ProfileInfo";

export const PersonPage: FC = () => {
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.insideBox}>
          <Profile />
          <ProfileInfo />
        </div>
        <div className={styles.buttonBox}>
          <Button text="Refresh" icon={IconType.Refresh} />
        </div>
        {/* <div>
        <Loader />
      </div> */}
        {/* <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} /> */}
      </div>
    </Container>
  );
};
