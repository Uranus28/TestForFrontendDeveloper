import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterSwitcher } from "./RouterSwitcher/RouterSwitcher";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <RouterSwitcher />
    </BrowserRouter>
  );
};
