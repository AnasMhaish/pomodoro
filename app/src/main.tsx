import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import MainLoader from "./components/MainLoader.tsx";
import { persistor, store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={<MainLoader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.Fragment>
);
