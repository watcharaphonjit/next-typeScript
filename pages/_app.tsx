import NavBar from "../components/navBar";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";

import "../styles/index.scss";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <NavBar />
      <section className="container-app">
        <Component {...pageProps} />
      </section>
    </Provider>
  );
};
export default MyApp;
