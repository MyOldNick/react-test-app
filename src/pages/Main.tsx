//React
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//components
import Header from "../components/Header";
import Params from "../components/Params";
import UsersList from "../components/UsersList";
import TextInput from '../components/TextInput'

const Main: React.FC = (): JSX.Element => {
  return (
      <Router>
        <Header />
        <Route exact path="/main" component={Params} />
        <Route path="/users" component={UsersList} />
        <Route path="/text" component={TextInput}/>
      </Router>
  );
};

export default Main;
