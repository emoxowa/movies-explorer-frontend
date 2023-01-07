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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

import * as auth from "../../utils/auth";
import * as api from "../../utils/MainApi";

import successIcon from '../../images/icon_success.png';
import failIcon from "../../images/icon_fail.png"

import CurrentUserContext from "../../contexts/CurrentUserContext";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [dataInfoTool, setDataInfoTool] = useState({ title: "", icon: "" });

  const history = useHistory();

  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .getToken(token)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => console.log(`Error ${err}`));
    }
  }

  useEffect(() => {
    checkToken();
    if (loggedIn) {
      const promises = [api.getUser(), api.getMovies()];
      Promise.all(promises)
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies.reverse());
        })
        .catch((err) => console.log(`Error ${err}`));
    }
  }, [loggedIn]);

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        history.push("/signin");
        setDataInfoTool({
          title: "Вы успешно зарегистрировались!",
          icon: successIcon,
        });
        handleInfoTooltipOpen();
      })
      .catch((err) => {
        setDataInfoTool({
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          icon: failIcon,
        });
        handleInfoTooltipOpen();
      }
      )
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        setDataInfoTool({
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          icon: failIcon,
        });
        handleInfoTooltipOpen();
      })
  }

  function handleSignOut() {
    return auth
      .logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, email }) {
    api
      .updateUser({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setDataInfoTool({
          title: "Вы успешно обновили данные пользователя!",
          icon: successIcon,
        });
        handleInfoTooltipOpen();
      })
      .catch((err) => {
        setDataInfoTool({
          title: "Имя совпадает с текущим",
          icon: failIcon,
        });
        handleInfoTooltipOpen();
      });
  }

  function handleLikeClick(movie) {
    api
      .createMovie(movie)
      .then((newMovie) => setSavedMovies([newMovie, ...savedMovies]))
      .catch((err) => console.log(`Error ${err}`));
  }

  function handleMovieDelete(movie) {
    api
      .deleteMovie(movie._id)
      .then(() =>
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id))
      )
      .catch((err) => console.log(`Error ${err}`));
  }

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }

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
          <ProtectedRoute
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            path="/saved-movies"
            component={SavedMovies}
            handleMovieDelete={handleMovieDelete}
          ></ProtectedRoute>
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/movies"
            savedMovies={savedMovies}
            component={Movies}
            handleLikeClick={handleLikeClick}
            handleMovieDelete={handleMovieDelete}
          ></ProtectedRoute>
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            component={Profile}
            signOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
          ></ProtectedRoute>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          title={dataInfoTool.title}
          icon={dataInfoTool.icon}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
