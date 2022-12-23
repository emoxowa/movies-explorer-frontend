import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";

import * as auth from "../../utils/auth";
import * as api from "../../utils/MainApi";

import CurrentUserContext from "../../contexts/CurrentUserContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        history.push("/signin");
        console.log("Вы успешно Вы успешно зарегистрировались!");
      })
      .catch((err) => 
        console.log(`Error ${err}`)
      )
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        history.push("/movies");
        console.log(localStorage);
      })
      .catch((err) => console.log("Что-то пошло не так! Попробуйте ещё раз."));
  }

  function handleSignOut() {
    return auth
      .logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkToken() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      auth
        .getToken(token)
        .then((res) => {
            setLoggedIn(true);
            history.push("/");
        })
        .catch((err) => console.log(`Error ${err}`));
    }
  };

  useEffect(() => {
    checkToken();
    if (loggedIn) {
      api
        .getUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(`Jopa ${err}`));
    }
  });

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/movies">
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header loggedIn={loggedIn} />
            <Profile loggedIn={loggedIn} signOut={handleSignOut} />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
