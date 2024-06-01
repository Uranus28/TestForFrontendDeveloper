import { FC } from "react";
import { RouterSwitcher } from "./RouterSwitcher/RouterSwitcher";
import { Layout } from "./Layout/Layout";
import { Header } from "../widgets";

export const App: FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <RouterSwitcher />
      </main>
    </Layout>
  );
  // return <RouterSwitcher />;
};
// <Layout>
// {/* <Header /> */}
// {/* <main> */}
// <RouterSwitcher />
// {/* </main> */}
// </Layout>
