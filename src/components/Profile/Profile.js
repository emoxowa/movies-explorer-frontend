import React, { useState, useContext } from "react";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ loggedIn, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    if (evt.target.name === "Name") {
      setName(evt.target.value);
    } else if (evt.target.name === "Email") {
      setEmail(evt.target.value);
    }
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form" onSubmit={handleSubmit} noValidate>
        <label className="profile__input-title">
          Имя
          <input
            type="text"
            className="profile__input"
            name="Name"
            onChange={handleChange}
            value={name}
            required
          ></input>
        </label>
        <label className="profile__input-title">
          E-mail
          <input
            type="email"
            className="profile__input"
            name="Email"
            onChange={handleChange}
            value={email}
            required
          ></input>
        </label>
        <p className="profile__text">Редактировать</p>
        <button to="/signin" className="profile__link" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </form>
    </main>
  );
}

export default Profile;
