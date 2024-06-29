import { FC } from "react";
import styles from "./profile.module.scss";

export const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <p className={styles.profileText}>{"PROFILE"}</p>
      <p className={styles.boldName}>{"Name Surname"}</p>
      <br />
      <br />
      <p id="info">
        Login:
        <span className={styles.regularText}>@namePerson</span>
      </p>
      <p id="info">
        Password:
        <span className={styles.linkText}>change password</span>
      </p>
    </div>
  );
};
