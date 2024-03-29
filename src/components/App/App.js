import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .then((res) => {
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    auth
      .login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setLoggedIn(true);
        localStorage.setItem("loggedIn", loggedIn);
        history.push("/movies");
      })
      .catch((err) => {
        setDataInfoTool({
          title: "Что-то пошло не так! Попробуйте ещё раз.",
          icon: failIcon,
        });
        handleInfoTooltipOpen();
      })
     .finally(() => {
        setIsLoading(false);
      });
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

  function handleUpdateUser(userData) {
    setIsLoading(true);
    api
      .updateUser(userData)
      .then((res) => {
        setDataInfoTool({
          title: "Вы успешно обновили данные пользователя!",
          icon: successIcon,
        });
        handleInfoTooltipOpen();
        setCurrentUser(res);
      })
      .catch((err) => {
        setDataInfoTool({
          title: "Имя совпадает с текущим",
          icon: failIcon,
        });
        handleInfoTooltipOpen();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLikeClick(movie) {
    api
      .createMovie(movie)
      .then((newMovie) => setSavedMovies([newMovie, ...savedMovies]))
      .catch((err) => handleUnauthorized(err));
  }

  function handleMovieDelete(movie) {
    api
      .deleteMovie(movie._id)
      .then(() =>
        setSavedMovies((state) => state.filter((m) => m._id !== movie._id))
      )
      .catch((err) => handleUnauthorized(err));
  }

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }

  function handleUnauthorized(err) {
    if (err === "Error: 401") {
      handleSignOut();
    }
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
            {!loggedIn ? (
              <Login handleLogin={handleLogin} isLoading={isLoading} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/signup">
            {!loggedIn ? (
              <Register handleRegister={handleRegister} isLoading={isLoading} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            handleMovieDelete={handleMovieDelete}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            handleLikeClick={handleLikeClick}
            handleMovieDelete={handleMovieDelete}
          ></ProtectedRoute>
          <ProtectedRoute
            loggedIn={loggedIn}
            path="/profile"
            isLoading={isLoading}
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
