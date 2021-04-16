import React, { useState } from 'react';
import LoginForm from "./components/elements/LoginForm";
import MainPage from "./components/elements/MainPage";
import Logout from "./components/elements/Logout";
import Header from "./components/elements/Header";
import Watched from "./components/elements/Watched";
import Watch from "./components/elements/Watch";
import Recomendations from "./components/elements/Recomendations";
import Settings from "./components/elements/Settings";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import "./components/scss/main.scss";

const App = () => {

  const userExample = {
    email: "test@gmail.com",
    password: "Test1234"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const Login = details => {
    console.log(details);

    if (details.email === userExample.email && details.password === userExample.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
      setIsLogged(true);
    } else {
      setError("Details do not match!");
    }
  }


  const LoginBox = () => {
    return <LoginForm logging={setIsLogged} />
  }


  return (
    <Router>
      <Switch>

        <Route exact path="/" component={(isLogged) ? Header : LoginBox} />
        <Route path="/login" component={LoginBox} />
        <Route path='/header'>
          <Header />
          <MainPage />
        </Route>
        <Route exact path="/watch">
          <Watch />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/recomendations">
          <Recomendations />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
