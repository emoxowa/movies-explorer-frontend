import React, {useState, useEffect, useContext } from "react";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import useFormWithValidation from "../useFormWithValidation/useFormWithValidation";
import { EMAIL_REGEX, USER_NAME_REGEX } from "../../utils/constants";

function Profile({ loggedIn, signOut, onUpdateUser, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);
  const [isLastData, setIsLastData] = useState(false);

  const buttonClassName = `${
    isValid && !isLastData
      ? "profile__text"
      : "profile__text profile__text-error"
  }`;

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setIsLastData(true);
    } else {
      setIsLastData(false);
    }
  }, [values, currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <label className="profile__input-title">
            Имя
            <input
              type="text"
              className="profile__input"
              name="name"
              placeholder={currentUser.name}
              minLength="2"
              maxLength="30"
              pattern={USER_NAME_REGEX}
              onChange={handleChange}
              value={values.name || ""}
              required
            ></input>
          </label>
          <span className="profile__error">{errors.name}</span>
          <label className="profile__input-title">
            E-mail
            <input
              type="email"
              className="profile__input"
              name="email"
              placeholder={currentUser.email}
              pattern={EMAIL_REGEX}
              onChange={handleChange}
              value={values.email || ""}
              required
            ></input>
          </label>
          <span className="profile__error">{errors.email}</span>
          <button
            disabled={!isValid || isLastData || isLoading}
            className={buttonClassName}
            type="submit"
          >
            Редактировать
          </button>
        </form>
        <button className="profile__link link" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}

export default Profile;
