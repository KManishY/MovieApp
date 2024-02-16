// actions.js
export const fetchMoviesRequest = () => ({
  type: "FETCH_MOVIES_REQUEST"
});

export const fetchMoviesSuccess = (movies) => ({
  type: "FETCH_MOVIES_SUCCESS",
  payload: movies
});

export const fetchMoviesFailure = (error) => ({
  type: "FETCH_MOVIES_FAILURE",
  payload: error
});

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const url =
        "https://api.themoviedb.org/3/discover/movie?api_key=ecd32fe3395b6a03b1604ba2fcd8f286";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2QzMmZlMzM5NWI2YTAzYjE2MDRiYTJmY2Q4ZjI4NiIsInN1YiI6IjY1Y2I2MWQyODliNTYxMDE2MzY4Y2ZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZW0-UgexslL36ePat5nMA_prG7ZmyMIeFhk2VnJ-2o"
        }
      };
      const response = await fetch(url, options);
      // if (!response.ok) {
      //   throw new Error("Failed to fetch movies");
      // }
      const data = await response.json();
      console.log('data: ', data);
      dispatch(fetchMoviesSuccess(data.results));
    } catch (error) {
      dispatch(fetchMoviesFailure(error.message));
    }
  };
};
