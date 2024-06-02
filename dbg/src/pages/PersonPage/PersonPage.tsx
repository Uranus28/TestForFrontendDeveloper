import { FC } from "react";
import { Button } from "../../entities/Button/Button";
import { Loader } from "../../entities/Loader/Loader";
import { IconType } from "../../shared/types/iconTypes";
import styles from "./personPage.module.scss";
import { Container } from "../../shared/Container/Container";

export const PersonPage: FC = () => {
  return (
    <Container>
      <div className={styles.box}>
        {/* <div>
        <Loader />
      </div> */}
        <Button text="Refresh" icon={IconType.Refresh} />
        <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} />
      </div>
    </Container>
  );
};
