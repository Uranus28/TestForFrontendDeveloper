import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../entities/Button/Button";
import { Container } from "../../shared/Container/Container";
import styles from "./weatherPage.module.scss";
import { IconType } from "../../shared/types/iconTypes";
import { SearchBar } from "../../widgets/SearchBar/SearchBar";

export const WeatherPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.box}>
        <SearchBar />
        {/* <div>
        <Loader />
      </div> */}
        {/* <Button text="Save" icon={IconType.Date} />
        <Button text="Search" icon={IconType.Search} /> */}
      </div>
    </Container>
  );
};
