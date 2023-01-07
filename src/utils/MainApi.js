import { MAIN_URL, MOVIES_IMAGE_URL } from "./constants";
import { checkResponse } from "./utils";

// Users

export const getUser = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkResponse);
};

export const updateUser = ({ name, email}) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then(checkResponse);
};

//Movies

export const getMovies = () => {
  return fetch(`${MAIN_URL}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkResponse);
};

export const createMovie = (movie) => {
  return fetch(`${MAIN_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: MOVIES_IMAGE_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: MOVIES_IMAGE_URL + movie.image.formats.thumbnail.url,
      owner: movie.owner,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (movieId) => {
  return fetch(`${MAIN_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(checkResponse);
};

