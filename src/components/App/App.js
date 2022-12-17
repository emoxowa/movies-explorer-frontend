import React from "react";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [loggedIn] = React.useState(true);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/signin" component={Login}></Route>
        <Route path="/signup" component={Register}></Route>
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
        <Route path="/profile" >
          <Header loggedIn={loggedIn} />
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
