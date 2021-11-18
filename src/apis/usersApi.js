import { httpClient } from '../utils/HttpClient';

export const getUsers = () => {
  return httpClient
    .get(`${process.env.REACT_APP_API_URL}/users`)
    .then((response) => {
      if (response !== undefined) {
        return response.data;
      }
    })
    .catch((error) => {
      throw error;
    });
};