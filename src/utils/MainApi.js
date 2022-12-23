import { MAIN_URL } from "./constants";
import { checkResponse } from "./utils";

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
    // credentials: "include",
    headers: {
      // authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then(checkResponse);
};
