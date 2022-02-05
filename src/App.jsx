import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import MovieList from './components/MovieList'
import SelectedMovie from './components/SelectedMovie'
import './App.css'

function App() {
  const [selectedMovie, setSelectedMovie] = useState()
  const [searchTitle, setSearchTitle] = useState('')
  let movies = useFetch(searchTitle)

  return (
    <div className="App">
      <header className="header">
        <h1>Movie Trailers App</h1>
        <input type="text" className='header-search' placeholder='Search Title'
          onChange={(e) => setSearchTitle(e.target.value)} />
      </header>
      {selectedMovie && <SelectedMovie selectedMovie={selectedMovie} />}
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
    </div>
  )
}

export default App
