import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { store, persistor } from "./store/store";
import { Elements } from "@stripe/react-stripe-js";
import { StripePromise } from "./utils/stripe/stripe.utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Elements stripe={StripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
