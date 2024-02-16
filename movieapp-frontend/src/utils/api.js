export const fetchMovies = async () => {
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
  try {
    const response = await fetch(url, options);
    const results = await response.json();
    console.log(results.results);
    return results.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
