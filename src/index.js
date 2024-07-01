import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LayoutComponent } from "./Layout/LayoutComponent";
import Router from "./Router";
import "./index.css";
import { DataProvider } from "./provider/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        {(props) => (
          <LayoutComponent props={props}>
            <Router {...props} />
          </LayoutComponent>
        )}
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
