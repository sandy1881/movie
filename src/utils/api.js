import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGQ1NWNlNzg5NDU4NzZjNDI4ZjY5M2QwYjdjZmVkNyIsInN1YiI6IjY1YTE3MjdmZTcyZmU4MDEzMjMwODFiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5qeTwsiitJAnj39_F_-hNlkZ5ny_reQqk_mqaQKYrEA';

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params
    });

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
