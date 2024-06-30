import { FC } from "react";
import { ReactComponent as GenderIcon } from "../../shared/assets/icons/gender.svg";
import { ReactComponent as NameIcon } from "../../shared/assets/icons/name.svg";
import { ReactComponent as EmailIcon } from "../../shared/assets/icons/email.svg";
import { ReactComponent as DateIcon } from "../../shared/assets/icons/date.svg";
import { ReactComponent as AgeIcon } from "../../shared/assets/icons/age.svg";
import styles from "./infoPerson.module.scss";

export const InfoPerson: FC = () => {
  return (
    <div className={styles.personBox}>
      <p id="info">
        <GenderIcon className={styles.icon} />
        {"Gender:"}
        <span className={styles.regularText}>gender</span>
      </p>
      <p id="info">
        <NameIcon className={styles.icon} />
        {"Name: "}
        <span className={styles.regularText}>personName</span>
      </p>
      <p id="info">
        <EmailIcon className={styles.icon} />
        {"Email: "}
        <span className={styles.regularText}>email</span>
      </p>
      <p id="info">
        <DateIcon className={styles.icon} />
        {"Date of Birth: "}
        <span className={styles.regularText}>date</span>
      </p>
      <p id="info">
        <AgeIcon className={styles.icon} />
        {"Age: "}
        <span className={styles.regularText}>age</span>
      </p>
    </div>
  );
};
