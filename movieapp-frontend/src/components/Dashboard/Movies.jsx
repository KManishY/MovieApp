import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../actions/movieActions";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

// import { fetchMovies } from '../../actions/movieActions';


const Movies = () => {
  const dispatch = useDispatch();
  const allMovies = useSelector(state => state.movies);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies()); // Dispatch the action to fetch movies
  }, [dispatch]); // Include dispatch as a dependency

  useEffect(() => {
    if (allMovies) {
      setMovies(allMovies.movies); // Update local state with fetched movies
    }
  }, [allMovies]); // Include allMovies as a dependency

  console.log('allMovies: ', allMovies);
  console.log('movies: ', movies);


  

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Movies List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies &&
            movies?.map((movie, index) => (
              <Link to={`movies/${movie.id}`}>
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={""}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                    <p className="text-gray-700 mb-4">{movie.overview}</p>
                    <p className="text-gray-600">
                      Rating: {movie.vote_average}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
