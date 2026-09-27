import { StrictMode } from "react";
import App from "./App.jsx";
import Form from "./Form.jsx";
import Header from "./Header.jsx";

function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export const routes = [
  { path: "/", element: <><Header/><Root /></> },
  { path: "/form", element: <><Header/><Form /></> },
];
