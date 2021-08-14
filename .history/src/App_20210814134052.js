import { ThemeProvider } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Form from "./components/Form";
import "./App.css";
const theme = {};
function App() {
  console.log("hi");
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
