import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WASMContextProvider } from "../context/WASM";
import { store } from "../store";
import { Provider as ReduxProvider } from "react-redux";

// TODO: move wasm context into redux
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReduxProvider store={store}>
      <WASMContextProvider>
        <Component {...pageProps} />
      </WASMContextProvider>
    </ReduxProvider>
  );
};

export default App;
