//React
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//store
import { observer } from "mobx-react-lite";
import Store from "./store/Store";
//pages
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
//styles
import "./app.css";

const App: React.FC = observer((): JSX.Element => {

    return (
      <Router>
        <Route exact path="/">
          {Store.users.length > 0 ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route
          path="/main"
          render={() => (Store.user ? <Main /> : <Redirect to="/" />)}
        />
      </Router>
    );
  }
);

export default App;
