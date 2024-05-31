import { FC } from "react";
import { Container } from "../../shared/Container/Container";
import styles from "./loader.module.scss";
import { ReactComponent as LoadingIcon } from "../../shared/assets/icons/loading.svg";

export const Loader: FC = () => {
  return (
    <Container>
      <div className={styles.loaderContainer}>
        <LoadingIcon className={styles.spinner} />
      </div>
    </Container>
  );
};
