import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import "./index.css";
import ContextWrapper from "./Context/ContextWrapper";
// ReactDOM.render(<App/>,document.getElementById("root"))
ReactDOM.render(
    <React.StrictMode>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </React.StrictMode>,
    document.getElementById("root")
  );
  