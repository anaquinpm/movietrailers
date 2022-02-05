import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = searchKey => {
  const type = searchKey?'search':'discover'
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const API_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          sort_by: "popularity.desc",
          query: searchKey
        }
      })
      setMovies(results);
    }
    getMovies()
  }, [searchKey]);
  return movies;
}