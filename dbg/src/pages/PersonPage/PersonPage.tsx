import { FC } from "react";
import { Button } from "../../entities/Button/Button";
import { Loader } from "../../entities/Loader/Loader";
import { IconType } from "../../shared/types/iconTypes";
import { Header } from "../../widgets";
import style from "./personPage.module.scss";
import { Container } from "../../shared/Container/Container";

export const PersonPage: FC = () => {
  return (
    <div className={style.divPage}>
      <Header />
      <Container>
        {/* <div>
        <Loader />
      </div> */}
        <Button text="Refresh" icon={IconType.Refresh} />
        <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} />
      </Container>
    </div>
  );
};
