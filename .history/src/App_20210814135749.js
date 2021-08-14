import { Container, createTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Form from "./components/Form";
import "./App.css";

function App() {
  console.log("hi");
  return (
    <ThemeProvider>
      <Layout />
      <Form />
    </ThemeProvider>
  );
}

export default App;
