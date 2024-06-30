import { FC } from "react";
import styles from "./profile.module.scss";
import { ReactComponent as EditIcon } from "../../shared/assets/icons/edit.svg";

export const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <p className={styles.profileText}>PROFILE</p>
      <p className={styles.boldName}>Name Surname</p>
      <br />
      <br />
      <p id="info">
        Login: &nbsp;
        <span className={styles.regularText}>@namePerson</span>
      </p>
      <p id="info">
        Password:&nbsp;
        <span className={styles.linkText}>change password</span>
      </p>
      <EditIcon className={styles.profileButton} />
    </div>
  );
};
