import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../shared/Container/Container";
import { Button } from "../../entities/Button/Button";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>404</h1>
      <p>Not found</p>
      <Button
        text="Go back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </Container>
  );
};
