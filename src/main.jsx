import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./State/store.js";
import ShopContextProdider from "./Context/ShopContext/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ShopContextProdider>
          <App />
        </ShopContextProdider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
