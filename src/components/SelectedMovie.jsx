import axios from "axios";
import VideoPlayer from "./VideoPlayer"
import { useState } from "react";


const SelectedMovie = ({ selectedMovie }) => {
  const [play, setPlay] = useState(false);
  const [trailer, setTrailer] = useState('');
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const API_URL = "https://api.themoviedb.org/3";

  const fetchTrailer = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`,
      {
        params: {
          api_key: import.meta.env.VITE_MOVIE_API_KEY,
          append_to_response: 'videos'
        }
      });
    const dataTrailer = data.videos.results
      .find(vid => vid.name === 'Official Trailer') ?? data.videos.results[0];
    setTrailer(dataTrailer.key)
    setPlay(true)
  }

  return (
    <div className="hero"
      style={{ backgroundImage: `url('${IMAGE_PATH}${selectedMovie.backdrop_path}')` }}>
      <div className="hero-content max-center">
        {play && <VideoPlayer trailer={trailer} setPlay={setPlay} />}
        <button className="hero-button"
          onClick={() => fetchTrailer(selectedMovie.id)}>Play</button>
        <h4 className="hero-title">{selectedMovie.title}</h4>
        <p className='hero-overview'>{selectedMovie.overview ?? "With out overview"}</p>
      </div>
    </div>
  );
}

export default SelectedMovie;