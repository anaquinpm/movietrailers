
const MovieList = ({ movies, setSelectedMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  return (
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path
              ? <img className={"movie-cover"}
                src={`${IMAGE_PATH}${movie.poster_path}`}
                onClick={() => setSelectedMovie(movie)} />
              : <div className='movie-placeholder'>No image found</div>
            }
            <h5 className={"movie-title"}>
              {movie.title}</h5>
          </div>
        ))}
      </div>
  );
}

export default MovieList