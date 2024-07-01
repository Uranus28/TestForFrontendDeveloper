import { FC } from "react";
import styles from "./profile.module.scss";
import { ReactComponent as EditIcon } from "../../shared/assets/icons/edit.svg";

interface ProfileProps {
  setModal: () => void;
}

export const Profile: FC<ProfileProps> = ({ setModal }) => {
  return (
    <div className={styles.profile}>
      <p className={styles.profileText}>PROFILE</p>
      <p className={styles.boldName}>Name Surname</p>
      <br />
      <br />
      <p>
        Login: &nbsp;
        <span className={styles.regularText}>@namePerson</span>
      </p>
      <p>
        Password:&nbsp;
        <span className={styles.linkText}>change password</span>
      </p>
      <EditIcon className={styles.profileButton} onClick={setModal} />
    </div>
  );
};
