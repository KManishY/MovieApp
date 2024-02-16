import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const allMovies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    // Find the movie with the given ID
    const foundMovie = allMovies.find((movie) => movie.id === parseInt(id));

    if (foundMovie) {
      setMovie(foundMovie);
    }
  }, [allMovies, id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-4xl hover:bg-gray-100">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-96 lg:rounded-t-none lg:rounded-l-lg"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-3xl lg:text-4xl font-bold tracking-tight text-blue-600 ">
            {movie.title}
          </h5>
          <p className="mb-3 font-normal text-lg lg:text-xl text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
          <div className="flex justify-between">
            <p className="text-lg lg:text-xl">Release Date: {movie.release_date}</p>
            <p className="text-lg lg:text-xl">Average Vote: {movie.vote_average}</p>
          </div>
          <Link to={`/movies/${movie.id}/SeatBooking`}>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Buy Ticket
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
