import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../entities/Button/Button";
import { Container } from "../../shared/Container/Container";

export const WeatherPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Not exists yet</p>
      <Button
        text="Go back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Container>
  );
};
