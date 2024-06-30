import { FC } from "react";
import { Container } from "../../shared/Container/Container";
import styles from "./weatherPage.module.scss";
import { SearchBar } from "../../widgets/SearchBar/SearchBar";
import { WeatherInfo } from "../../widgets/WeatherInfo/WeatherInfo";

export const WeatherPage: FC = () => {
  return (
    <Container>
      <div className={styles.box}>
        <SearchBar />
        <WeatherInfo />
        {/* <div>
        <Loader />
      </div> */}
        {/* <Button text="Save" icon={IconType.Date} />
         */}
      </div>
    </Container>
  );
};
