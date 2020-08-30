import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import "./style.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // ?
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="row">
      <h2 className={`row__title ${isLargeRow && "row__titleLarge"}`}>
        {title}
      </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="row__post">
            <img
              className={`row__img ${isLargeRow && "row__posterLarge"}`}
              src={`${imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <p
              className={`row__description ${
                isLargeRow && "row__descriptionLarge"
              }`}
            >
              {truncate(movie?.overview, 40)}
            </p>
          </div>
        ))}
      </div>
      {/*title*/}

      {/*container*/}
    </div>
  );
}

export default Row;
