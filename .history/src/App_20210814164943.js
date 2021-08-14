import { Container, createTheme, ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Form from "./components/Form";
import "./App.css";

function App() {
  console.log("hi");
  return (
    <Container>
      <Layout />
      <Form />
    </Container>
  );
}

export default App;
