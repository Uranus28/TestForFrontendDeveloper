import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../entities/Button/Button";
import { RejectedDataType } from "../ErrorPage/ErrorPage";
import { Container } from "../../shared/Container/Container";

export const WeatherPage: FC = () => {
  const error = useRouteError();
  const knownError = error as RejectedDataType;

  const navigate = useNavigate();

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {knownError && (
        <p>
          <i>{knownError.status || knownError.messageError}</i>
        </p>
      )}
      <Button
        text="Go back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Container>
  );
  // return <div>WeatherPage</div>;
};
