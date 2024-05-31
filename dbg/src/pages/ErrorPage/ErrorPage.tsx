import { FC } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../../entities/Button/Button";
import { Container } from "../../shared/Container/Container";

/** Type of error sent to the storage. */
export interface RejectedDataType {
  /** Error message.  */
  readonly messageError: string;
  /** Error status. */
  readonly status?: string;
}

export const ErrorPage: FC = () => {
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
};
