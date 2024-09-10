import { MOVIES_URL } from './constants';
import { checkResponse } from './utils'

export const getMovies =()=> {
  return fetch(MOVIES_URL, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => checkResponse(res))
}
