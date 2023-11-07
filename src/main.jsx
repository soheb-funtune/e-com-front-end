import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProdider from "./Context/ShopContext/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProdider>
      <App />
    </ShopContextProdider>
  </React.StrictMode>
);
